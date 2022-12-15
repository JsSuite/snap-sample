import TodoIcon from "../public/images/icon-todo.svg";
import CalendarIcon from "../public/images/icon-calendar.svg";
import ReminderIcon from "../public/images/icon-reminders.svg";
import PlanningIcon from "../public/images/icon-planning.svg";

export default [
  {
    name: "Features",
    children: [
      {
        name: "Todo List",
        Icon: TodoIcon,
      },
      {
        name: "Calendar",
        Icon: CalendarIcon,
      },
      {
        name: "Reminders",
        Icon: ReminderIcon,
      },
      {
        name: "Planning",
        Icon: PlanningIcon,
      },
    ],
  },
  {
    name: "Company",
    children: [
      {
        name: "History",
      },
      {
        name: "Our Team",
      },
      {
        name: "Blog",
      },
    ],
  },
  {
    name: "Careers",
  },
  {
    name: "About",
  },
];
