import { CreditCard, Envelope, Gear, Lock, Person } from "react-bootstrap-icons";
import SettingsBilling from "../../fragments/Settings/SettingsBilling";
import SettingsEmailNotifications from "../../fragments/Settings/SettingsEmailNotifications";
import SettingsGeneral from "../../fragments/Settings/SettingsGeneral";
import SettingsPassword from "../../fragments/Settings/SettingsPassword";
import SettingsSocialProfile from "../../fragments/Settings/SettingsSocialProfile";

export const settingsOptions = [
	{ id: "general", icon: Gear, title: "General", content: SettingsGeneral },
	{ id: "password", icon: Lock, title: "Password", content: SettingsPassword },
	{ id: "social-profile", icon: Person, title: "Social Profile", content: SettingsSocialProfile },
	{ id: "email-notifications", icon: Envelope, title: "Email Notifications", content: SettingsEmailNotifications },
	{ id: "billing", icon: CreditCard, title: "Billing", content: SettingsBilling }
];
