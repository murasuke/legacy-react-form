import { useState, type FormEvent } from 'react';
import { VBButton } from '../components/VBButton';
import { VBCheckbox } from '../components/VBCheckbox';
import { VBForm } from '../components/VBForm';
import { VBFrame } from '../components/VBFrame';
import { VBRadioGroup } from '../components/VBRadioGroup';
import { VBSelect } from '../components/VBSelect';
import { VBTextBox } from '../components/VBTextBox';
import { VBTextArea } from '../components/VBTextArea';
import { VBWindow } from '../components/VBWindow';

const employmentTypes = [
  { value: 'full-time', label: '正社員' },
  { value: 'contract', label: '契約社員' },
  { value: 'part-time', label: 'パート' },
] as const;

export function ComponentSamplePage() {
  const [employeeName, setEmployeeName] = useState('山田 太郎');
  const [department, setDepartment] = useState('development');
  const [employmentType, setEmploymentType] = useState('full-time');
  const [accountStatus, setAccountStatus] = useState('active');
  const [notes, setNotes] = useState('Reactコンポーネントの表示サンプルです。');
  const [sendNotification, setSendNotification] = useState(true);
  const [status, setStatus] = useState('すべてのコンポーネントを表示しています。');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(`${employeeName || '名称未設定'} の内容を登録しました。`);
  }

  function handleReset() {
    setEmployeeName('');
    setDepartment('development');
    setEmploymentType('full-time');
    setAccountStatus('active');
    setNotes('');
    setSendNotification(true);
    setStatus('入力内容をクリアしました。');
  }

  return (
    <VBWindow
      title="Component Gallery - 社員登録"
      status={status}
      showMenu
    >
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3 border-b border-[#808080] pb-3">
        <div>
          <p className="font-bold">VB6 UI コンポーネント表示サンプル</p>
          <p className="mt-1 text-[12px] text-[#404040]">
            src/components の全コンポーネントを、この画面で確認できます。
          </p>
        </div>
        <a
          href="/"
          className="vb-button inline-flex min-w-0 items-center no-underline"
        >
          ← メニューへ戻る
        </a>
      </div>

      <VBForm onSubmit={handleSubmit}>
        <div className="grid gap-3 md:grid-cols-2">
          <VBFrame title="基本情報">
            <VBTextBox
              label="社員名："
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
            <VBTextBox label="社員番号：" value="EMP-00124" readOnly />
            <VBSelect
              label="所属部署："
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              <option value="development">開発部</option>
              <option value="sales">営業部</option>
              <option value="administration">管理部</option>
            </VBSelect>
          </VBFrame>

          <VBFrame title="雇用情報">
            <VBRadioGroup
              label="雇用形態："
              name="employment-type"
              options={employmentTypes}
              value={employmentType}
              onChange={(event) => setEmploymentType(event.target.value)}
              layout="field"
            />
            <VBTextBox label="入社日：" type="date" defaultValue="2026-04-01" />
            <VBTextArea
              label="備考："
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="任意入力"
              rows={3}
            />
            <VBCheckbox
              label="登録完了をメールで通知する"
              checked={sendNotification}
              onChange={(event) => setSendNotification(event.target.checked)}
            />
          </VBFrame>
        </div>

        <VBRadioGroup
          className="mt-3"
          label="アカウント状態"
          name="account-status"
          options={[
            { value: 'active', label: '有効' },
            { value: 'suspended', label: '停止' },
          ]}
          value={accountStatus}
          onChange={(event) => {
            setAccountStatus(event.target.value);
            setStatus('アカウント状態を変更しました。');
          }}
        />

        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <VBButton type="submit" label="登録" />
          <VBButton type="button" onClick={handleReset}>
            クリア
          </VBButton>
          <VBButton type="button" disabled>
            無効ボタン
          </VBButton>
        </div>
      </VBForm>
    </VBWindow>
  );
}
