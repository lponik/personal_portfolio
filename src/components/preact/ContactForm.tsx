import { useMemo, useState } from 'preact/hooks';

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  message: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    return {
      name: form.name.trim().length === 0,
      email: !emailRegex.test(form.email.trim()),
      message: form.message.trim().length === 0,
    };
  }, [form]);

  const hasErrors = errors.name || errors.email || errors.message;

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    setSubmitted(true);

    if (hasErrors) {
      return;
    }

    setForm(initialState);
  };

  const fieldClass =
    'w-full rounded-xl border border-white/15 bg-slate-950/50 px-4 py-3 text-lg text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-primary';

  return (
    <form class="rounded-2xl border border-white/10 bg-black/30 p-8" noValidate onSubmit={handleSubmit}>
      <div class="mb-4">
        <label class="mb-2 block text-base uppercase tracking-[0.22em] text-slate-300" for="name">
          Name
        </label>
        <input
          class={fieldClass}
          id="name"
          name="name"
          onInput={(event) =>
            setForm((state) => ({
              ...state,
              name: (event.currentTarget as HTMLInputElement).value,
            }))
          }
          placeholder="Enter your name"
          required
          type="text"
          value={form.name}
        />
        {submitted && errors.name && <p class="mt-1 text-sm text-rose-300">Name is required.</p>}
      </div>

      <div class="mb-4">
        <label class="mb-2 block text-base uppercase tracking-[0.22em] text-slate-300" for="email">
          Email
        </label>
        <input
          class={fieldClass}
          id="email"
          name="email"
          onInput={(event) =>
            setForm((state) => ({
              ...state,
              email: (event.currentTarget as HTMLInputElement).value,
            }))
          }
          placeholder="Enter your email"
          required
          type="email"
          value={form.email}
        />
        {submitted && errors.email && <p class="mt-1 text-sm text-rose-300">Enter a valid email address.</p>}
      </div>

      <div class="mb-5">
        <label class="mb-2 block text-base uppercase tracking-[0.22em] text-slate-300" for="message">
          Message
        </label>
        <textarea
          class={fieldClass}
          id="message"
          name="message"
          onInput={(event) =>
            setForm((state) => ({
              ...state,
              message: (event.currentTarget as HTMLTextAreaElement).value,
            }))
          }
          placeholder="Type your message"
          required
          rows={5}
          value={form.message}
        />
        {submitted && errors.message && <p class="mt-1 text-sm text-rose-300">Message is required.</p>}
      </div>

      <button
        class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-LinkBtnGradient px-4 py-3 text-lg font-semibold text-white transition hover:opacity-90"
        type="submit"
      >
        <span>Send Message</span>
        <svg aria-hidden fill="none" height="16" viewBox="0 0 24 24" width="16">
          <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
        </svg>
      </button>
    </form>
  );
}
