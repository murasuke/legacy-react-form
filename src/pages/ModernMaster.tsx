import { useState, type ChangeEvent, type FormEvent } from 'react';

type EmployeeForm = {
  lastName: string;
  firstName: string;
  email: string;
};

const initialEmployee: EmployeeForm = {
  lastName: '',
  firstName: '',
  email: '',
};

export function ModernMaster() {
  const [employee, setEmployee] = useState<EmployeeForm>(initialEmployee);
  const [status, setStatus] = useState('社員情報を入力してください。');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const field = event.target.name as keyof EmployeeForm;
    setEmployee((current) => ({ ...current, [field]: event.target.value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('社員情報を登録しました。');
  }

  function handleClear() {
    setEmployee({ ...initialEmployee });
    setStatus('入力内容をクリアしました。');
  }

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/70 ring-1 ring-slate-200">
        <form className="space-y-6 p-6 sm:p-8" onSubmit={handleSubmit}>
          <fieldset className="space-y-5">
            <legend className="text-xl font-semibold text-slate-800">
              社員マスタメンテ
            </legend>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  className="mb-2 block text-md font-lg text-slate-700"
                  htmlFor="modern-email"
                >
                  メールアドレス
                </label>
                <input
                  className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  id="modern-email"
                  name="email"
                  placeholder="taro.yamada@example.com"
                  type="email"
                  value={employee.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="modern-last-name"
                >
                  姓
                </label>
                <input
                  className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  id="modern-last-name"
                  name="lastName"
                  placeholder="山田"
                  value={employee.lastName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  className="mb-2 block text-sm font-medium text-slate-700"
                  htmlFor="modern-first-name"
                >
                  名
                </label>
                <input
                  className="block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  id="modern-first-name"
                  name="firstName"
                  placeholder="太郎"
                  value={employee.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </fieldset>

          <div className="flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-end">
            <button
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
              type="button"
              onClick={handleClear}
            >
              ク リ ア
            </button>
            <button
              className="rounded-lg bg-[#0d6efd] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#0b5ed7] focus:outline-none focus:ring-4 focus:ring-[#0d6efd]/25"
              type="submit"
            >
              登　録
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
