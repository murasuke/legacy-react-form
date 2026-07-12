import { useState, type FormEvent } from 'react';
import { VBButton } from '../components/VBButton';
import { VBWindow } from '../components/VBWindow';
import { VBForm } from '../components/VBForm';
import { VBTextBox } from '../components/VBTextBox';

export function LoginPage() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(
    'ユーザー名とパスワードを入力してください。',
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(
      userName && password
        ? 'ログイン情報を確認しました。'
        : '入力内容を確認してください。',
    );
  }

  function handleCancel() {
    setUserName('');
    setPassword('');
    setStatus('入力をクリアしました。');
  }

  return (
    <VBWindow title="LoginForm - Visual Basic 6.0">
      <VBForm onSubmit={handleSubmit}>
        <div className="mt-[2px] mb-4 flex items-center gap-3">
          <span
            className="grid size-[34px] shrink-0 place-items-center border-2 border-t-white border-l-white border-r-[#404040] border-b-[#404040] bg-[#000080] text-[15px] text-white"
            aria-hidden="true"
          >
            ◆
          </span>
          <div>
            <h1 className="m-0 text-[15px] font-bold text-[#000080]">
              ログイン
            </h1>
            <p className="mt-1 mb-0">ユーザー認証情報を入力してください。</p>
          </div>
        </div>

        <fieldset className="vb-groupbox">
          <legend>ユーザー情報</legend>
          <div className="vb-fields">
            <VBTextBox
              label="ユーザー名(&amp;U):"
              autoFocus
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
            <VBTextBox
              label="パスワード(&amp;P):"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </fieldset>

        <div className="mt-[18px] flex justify-end gap-2">
          <VBButton type="submit">OK</VBButton>
          <VBButton type="button" onClick={handleCancel}>
            キャンセル
          </VBButton>
        </div>

        <p className="mt-[14px] mb-0 min-h-[14px] text-[#404040]" role="status">
          {status}
        </p>
      </VBForm>
    </VBWindow>
  );
}
