import sys
import json
import os
import subprocess

def get_git_branch(cwd):
    try:
        result = subprocess.run(
            ['git', 'rev-parse', '--abbrev-ref', 'HEAD'],
            capture_output=True, text=True, cwd=cwd
        )
        return result.stdout.strip()
    except Exception:
        return 'unknown'

def extract_text(content):
    if isinstance(content, str):
        return content
    if isinstance(content, list):
        parts = []
        for block in content:
            if isinstance(block, dict) and block.get('type') == 'text':
                parts.append(block.get('text', ''))
        return '\n'.join(parts)
    return ''

def main():
    try:
        hook_input = json.load(sys.stdin)
    except Exception:
        sys.exit(0)

    transcript_path = hook_input.get('transcript_path', '')
    if not transcript_path or not os.path.exists(transcript_path):
        sys.exit(0)

    messages = []
    try:
        with open(transcript_path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line:
                    try:
                        messages.append(json.loads(line))
                    except Exception:
                        pass
    except Exception:
        sys.exit(0)

    # 最初のユーザーメッセージ（プロンプト）
    user_prompt = None
    for msg in messages:
        if msg.get('type') == 'user':
            content = msg.get('message', {}).get('content', '')
            text = extract_text(content)
            if text.strip():
                user_prompt = text.strip()
                break

    # 最後のアシスタントメッセージ（結果）
    last_assistant = None
    for msg in reversed(messages):
        if msg.get('type') == 'assistant':
            content = msg.get('message', {}).get('content', '')
            text = extract_text(content)
            if text.strip():
                last_assistant = text.strip()
                break

    if not user_prompt:
        sys.exit(0)

    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    project_name = os.path.basename(project_dir)
    branch = get_git_branch(project_dir)

    result_text = last_assistant if last_assistant else '（記録なし）'
    # 長すぎる場合は最初の段落のみ使用
    first_paragraph = result_text.split('\n\n')[0]
    if len(first_paragraph) > 600:
        first_paragraph = first_paragraph[:600] + '...'

    entry = (
        f"\n## [{project_name}/{branch}]\n\n"
        f"{user_prompt}\n\n"
        f"#結果どうしたか\n{first_paragraph}\n\n"
        f"------------------------------------------------\n"
    )

    prompt_file = os.path.join(project_dir, 'History', 'Prompt.md')
    os.makedirs(os.path.dirname(prompt_file), exist_ok=True)

    with open(prompt_file, 'a', encoding='utf-8') as f:
        f.write(entry)

if __name__ == '__main__':
    main()
