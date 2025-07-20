const contactItems = [
  {
    href: "mailto:anisyayor522@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email",
    text: "anisyayor522@gmail.com",
    hoverClass: "hover:border-blue-500/60",
  },
  {
    href: "https://github.com/AnisDev522",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-violet-400"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
    title: "GitHub",
    text: "github.com/AnisDev522",
    hoverClass: "hover:border-violet-500/60",
  },
  {
    href: "https://www.youtube.com/@AnisProduction522", // แก้ตรงนี้ใส่ https://
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-red-500"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19.615 3.184c-1.387-.534-6.955-.534-6.955-.534s-5.568 0-6.955.534A3.02 3.02 0 0 0 3.184 5.385C2.65 6.773 2.65 12 2.65 12s0 5.227.534 6.615a3.02 3.02 0 0 0 1.521 1.521c1.387.534 6.955.534 6.955.534s5.568 0 6.955-.534a3.02 3.02 0 0 0 1.521-1.521c.534-1.388.534-6.615.534-6.615s0-5.227-.534-6.615a3.02 3.02 0 0 0-1.521-1.521zM10 15.5v-7l6 3.5-6 3.5z" />
      </svg>
    ),
    title: "YouTube",
    text: "Anis Production",
    hoverClass: "hover:border-red-500/60",
  },  
  {
    href: "tel:+66999999999", // แก้เบอร์เอาเองนะ
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-green-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h2a1 1 0 011 1v3a1 1 0 01-.293.707l-1.414 1.414a16.001 16.001 0 007.586 7.586l1.414-1.414A1 1 0 0116 15h3a1 1 0 011 1v2a2 2 0 01-2 2h-.5C9.387 20 4 14.613 4 8.5V8a2 2 0 00-1-1.732V5z"
        />
      </svg>
    ),
    title: "Phone",
    text: "0930729891", // เปลี่ยนเบอร์ที่นี่ด้วย
    hoverClass: "hover:border-green-500/60",
  },
];

const ContactInfo = ({ fwdRef, className }) => {
  return (
    <div
      ref={fwdRef}
      className={`lg:col-span-5 text-center lg:text-left ${className}`}
    >
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
        Contact
      </h2>
      <p className="text-lg text-slate-400 mb-10">
        If you have any questions or are interested in working with me, feel
        free to reach out. Or, you can try chatting with my AI on the right
        first.
      </p>
      <div className="flex flex-col gap-6">
        {contactItems.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-card flex items-center p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl transition-all duration-300 hover:bg-slate-800/80 hover:-translate-y-1 ${item.hoverClass}`}
          >
            <div className="flex-shrink-0 bg-slate-700/50 p-3 rounded-lg mr-5">
              {item.icon}
            </div>
            <div>
              <p className="font-semibold text-white text-lg">{item.title}</p>
              <p className="text-slate-400">{item.text}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
