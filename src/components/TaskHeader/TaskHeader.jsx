import css from './TaskHeader.module.css';

export default function TaskHeader() {
  return (
    <div className={css.container}>
      <h2 className={css.className}>Основи технологій R&D - 2024</h2>
      <h3 className={css.classDescription}>ІПЗ 420 Лабораторні</h3>
      <p className={css.classCode}>Код: 48345</p>
    </div>
  );
}
