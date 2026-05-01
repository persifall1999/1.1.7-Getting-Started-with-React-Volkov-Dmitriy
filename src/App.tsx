import { createElement } from 'react';
import './App.css';

export default function App() {
  return createElement(
    'h3',
    { className: 'title' },
    'Неудача – это просто возможность начать снова, но уже более мудро. © Генри Форд'
  );
}
