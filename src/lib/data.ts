import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Todo,
} from '@components/features/card';
import { MusicVisual, OtherVisual } from '@components/Visual';

export const Features = [
  {
    title: 'Use your calendar as a todo list',
    id: 'todo-list',
    card: Todo,
    visual: OtherVisual,
  },
  {
    title: 'Color your calendar to organize',
    id: 'colors',
    card: Colors,
    visual: OtherVisual,
  },
  {
    title: 'Instantly know if someone is available',
    id: 'availability',
    card: Availability,
    visual: OtherVisual,
  },
  {
    title: 'Track what you listened to when',
    id: 'music',
    card: Music,
    visual: MusicVisual,
  },
  {
    title: 'Send scheduling links guests love',
    id: 'scheduling-links',
    card: SchedulingLinks,
    visual: OtherVisual,
  },
  {
    title: 'Always know what your team is up to',
    id: 'team',
    card: Team,
    visual: OtherVisual,
  },
];
