import { useState } from 'react';
import { VBWindow } from '../components/VBWindow';
import { VBForm } from '../components/VBForm';
import { VBButton } from '../components/VBButton';
import { VBFrame } from '../components/VBFrame';
import { VBTextBox } from '../components/VBTextBox';

type EmployeeForm = {
  lastName: string;
  firstName: string;
  email: string;
};

const emptyEmployee: EmployeeForm = {
  lastName: '',
  firstName: '',
  email: '',
};

export function SimpleMaster() {
  const [employee] = useState<EmployeeForm>(emptyEmployee);
  const [status, setStatus] = useState('社員情報を入力してください。');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(`登録しました。`);
  }

  return (
    <VBWindow title="社員ﾏｽﾀﾒﾝﾃ" status={status}>
      <VBForm onSubmit={handleSubmit}>
        <VBFrame title="【社員情報】">
          <VBTextBox label="ﾒｰﾙｱﾄﾞﾚｽ：" type="email" value={employee.email} />
          <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1 max-[560px]:gap-3">
            <VBTextBox label="姓：" value={employee.lastName} />
            <VBTextBox label="名：" value={employee.firstName} />
          </div>
        </VBFrame>

        <div className="mt-3 flex justify-end gap-2">
          <VBButton type="submit">登録</VBButton>
          <VBButton type="button">ｸﾘｱ</VBButton>
        </div>
      </VBForm>
    </VBWindow>
  );
}
