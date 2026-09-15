export const social = {
  github: "https://github.com/i-am-faizan/",
  linkedin: "https://www.linkedin.com/in/faizan-khan-943bb5327/",
  twitter: "https://x.com/i_am_faizan",
  email: "khanfaizan0003@gmail.com",
  emailCc: "",
  emailBcc: "",
  emailSubject: "Inquiry from Portfolio",
  emailBody: "Hi Faizan,\n\nI visited your portfolio website and would like to connect.",
};

export function getMailtoUrl(options?: {
  email?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
}): string {
  const to = options?.email || social.email;
  const cc = options?.cc ?? social.emailCc;
  const bcc = options?.bcc ?? social.emailBcc;
  const subject = options?.subject ?? social.emailSubject;
  const body = options?.body ?? social.emailBody;

  const cleanTo = to.replace(/^mailto:/, "");
  const queryParts: string[] = [];

  if (cc) queryParts.push(`cc=${encodeURIComponent(cc)}`);
  if (bcc) queryParts.push(`bcc=${encodeURIComponent(bcc)}`);
  if (subject) queryParts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) queryParts.push(`body=${encodeURIComponent(body)}`);

  const queryString = queryParts.length > 0 ? `?${queryParts.join("&")}` : "";
  return `mailto:${cleanTo}${queryString}`;
}

