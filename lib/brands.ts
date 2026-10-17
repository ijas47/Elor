declare const e164: unique symbol;
export type PhoneE164 = string & { readonly [e164]: true };

function phone(value: `+91${string}`): PhoneE164 {
  if (!/^\+91\d{10}$/.test(value)) throw new Error(`Not an Indian E.164 number: ${value}`);
  return value as PhoneE164;
}

export const display = (p: PhoneE164) => `+91 ${p.slice(3, 8)} ${p.slice(8)}`;
export const telHref = (p: PhoneE164) => `tel:${p}`;
export const waHref = (p: PhoneE164, text: string) =>
  `https://wa.me/${p.slice(1)}?text=${encodeURIComponent(text).replace(/'/g, "%27")}`;

export const brands = {
  elor: {
    name: "Elor Lighting",
    phone: phone("+918848708529"),
    whatsapp: phone("+918848708529"),
    email: "hello@elorlighting.com",
  },
  celestial: {
    name: "Celestial Lights",
    phone: phone("+919995619470"),
  },
} as const;

export type BrandId = keyof typeof brands;

/**
 * Elor's contact details in the forms pages need. Derived from the registry
 * above, so a number exists in one place only.
 */
export const elorContact = {
  phone: display(brands.elor.phone),
  phoneHref: telHref(brands.elor.phone),
  whatsapp: display(brands.elor.whatsapp),
  whatsappHref: waHref(brands.elor.whatsapp, "Hi Elor, I'm interested in lighting for my space."),
} as const;
