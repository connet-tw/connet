import { defineMessages } from "react-intl";

export const app = defineMessages({
  title: {
    id: "app.title",
    defaultMessage: "Valen International",
  }
});

export const contact = defineMessages({
  contact: {
    id: "contact.contactUs",
    defaultMessage: "Contact Us",
  },
  phoneNumber: {
    id: "contact.phoneNumber",
    defaultMessage: "+886-2-2364-2433",
  },
  emailAddress: {
    id: "contact.emailAddress",
    defaultMessage: "valen@info.com.tw",
  },
  addressLine1: {
    id: "contact.address.line1",
    defaultMessage: "2nd Fl, No. 30, Bashi Rd.",
  },
  addressLine2: {
    id: "contact.address.line2",
    defaultMessage: "Danshui District",
  },
  addressLine3: {
    id: "contact.address.line3",
    defaultMessage: "Taipei, Taiwan",
  },
});

export const nav = defineMessages({
  wines: {
    id: "nav.wines",
    defaultMessage: "Wines",
  },
  events: {
    id: "nav.events",
    defaultMessage: "Events",
  },
  promotions: {
    id: "nav.promotions",
    defaultMessage: "Promotions",
  },
  about: {
    id: "nav.about",
    defaultMessage: "About",
  },
  contact: {
    id: "nav.contact",
    defaultMessage: "Contact",
  },
});
