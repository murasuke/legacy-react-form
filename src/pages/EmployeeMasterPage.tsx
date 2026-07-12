import { useState, type ChangeEvent, type FormEvent } from 'react';
import { VBButton } from '../components/VBButton';
import { VBWindow } from '../components/VBWindow';
import { VBForm } from '../components/VBForm';
import { VBRadioGroup } from '../components/VBRadioGroup';
import { VBSelect } from '../components/VBSelect';
import { VBTextBox } from '../components/VBTextBox';

type MaintenanceMode = 'new' | 'edit' | 'delete';
type Gender = 'male' | 'female' | 'other';

type EmployeeForm = {
  employeeId: string;
  lastName: string;
  firstName: string;
  gender: Gender;
  email: string;
  department: string;
};

const modeOptions = [
  { value: 'new', label: '新規' },
  { value: 'edit', label: '修正' },
  { value: 'delete', label: '削除' },
] as const;

const genderOptions = [
  { value: 'male', label: '男性' },
  { value: 'female', label: '女性' },
  { value: 'other', label: 'その他' },
] as const;

const emptyEmployee: EmployeeForm = {
  employeeId: '',
  lastName: '',
  firstName: '',
  gender: 'male',
  email: '',
  department: '総務部',
};

export function EmployeeMasterPage() {
  const [mode, setMode] = useState<MaintenanceMode>('new');
  const [employee, setEmployee] = useState<EmployeeForm>(emptyEmployee);
  const [status, setStatus] = useState(
    '新規モード：社員情報を入力してください。',
  );

  function updateField<K extends keyof EmployeeForm>(
    field: K,
    value: EmployeeForm[K],
  ) {
    setEmployee((current) => ({ ...current, [field]: value }));
  }

  function handleModeChange(event: ChangeEvent<HTMLInputElement>) {
    const nextMode = event.target.value as MaintenanceMode;
    setMode(nextMode);
    setStatus(
      `${event.target.labels?.[0]?.textContent ?? ''}モードを選択しました。`,
    );
  }

  function handleGenderChange(event: ChangeEvent<HTMLInputElement>) {
    updateField('gender', event.target.value as Gender);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const action =
      modeOptions.find((option) => option.value === mode)?.label ?? '登録';
    setStatus(`${action}処理を受け付けました。`);
  }

  function handleClear() {
    setEmployee(emptyEmployee);
    setStatus('入力内容をクリアしました。');
  }

  return (
    <VBWindow title="社員台帳 - 社員の編集" status={status}>
      <VBForm onSubmit={handleSubmit}>
        <VBRadioGroup
          label="編集モード"
          name="maintenance-mode"
          options={modeOptions}
          value={mode}
          onChange={handleModeChange}
          className="flex items-center gap-[10px] border-0 p-0 shadow-none max-[560px]:items-start max-[560px]:flex-col max-[560px]:gap-[6px]"
          legendClassName="flex-none p-0"
        />

        <fieldset className="vb-groupbox mt-[10px] p-[11px_14px_12px] max-[430px]:px-[10px]">
          <legend>社員情報</legend>
          <div className="grid gap-2">
            <VBTextBox
              label="社員ID："
              className="w-[14ch] max-w-full"
              value={employee.employeeId}
              onChange={(event) =>
                updateField('employeeId', event.target.value)
              }
              autoFocus
            />

            <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1 max-[560px]:gap-3">
              <VBTextBox
                label="姓："
                value={employee.lastName}
                onChange={(event) =>
                  updateField('lastName', event.target.value)
                }
              />
              <VBTextBox
                label="名："
                value={employee.firstName}
                onChange={(event) =>
                  updateField('firstName', event.target.value)
                }
              />
            </div>

            <VBRadioGroup
              label="性別："
              name="gender"
              options={genderOptions}
              value={employee.gender}
              onChange={handleGenderChange}
              className="grid grid-cols-[125px_minmax(0,1fr)] items-center gap-2 border-0 p-0 shadow-none max-[430px]:grid-cols-1 max-[430px]:gap-[3px]"
              layout="field"
            />

            <VBTextBox
              label="ﾒｰﾙｱﾄﾞﾚｽ："
              type="email"
              value={employee.email}
              onChange={(event) => updateField('email', event.target.value)}
            />

            <VBSelect
              label="部署："
              value={employee.department}
              onChange={(event) =>
                updateField('department', event.target.value)
              }
            >
              <option value="総務部">総務部</option>
              <option value="営業部">営業部</option>
              <option value="開発部">開発部</option>
              <option value="経理部">経理部</option>
            </VBSelect>
          </div>
        </fieldset>

        <div className="mt-3 flex justify-end gap-2">
          <VBButton type="submit">登録</VBButton>
          <VBButton type="button" onClick={handleClear}>
            ｸﾘｱ
          </VBButton>
        </div>
      </VBForm>
    </VBWindow>
  );
}
