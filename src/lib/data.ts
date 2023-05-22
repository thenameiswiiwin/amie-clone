import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from '@components/features/card';

export const Features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo,
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors,
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability,
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music,
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks,
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team,
  },
];
