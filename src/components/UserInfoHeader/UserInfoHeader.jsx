import css from './UserInfoHeader.module.css';

export default function UserInfoHeader() {
  return (
    <div className={css.container}>
      <div className={css.userPin}>A</div>
      <h3 className={css.userName}>Савченко Олена Вікторівна</h3>
    </div>
  );
}
