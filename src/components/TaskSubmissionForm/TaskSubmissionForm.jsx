import css from './TaskSubmissionForm.module.css';
import { useState, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export default function TaskSubmissionForm() {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);
  const hasFiles = files.length > 0;

  const handleFileChange = event => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const removeFile = index => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setFiles([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.form}>
        <div className={css.formInfo}>
          <h2 className={css.formHeader}>Ваша робота</h2>
          <p className={css.text}>Оцінено</p>
        </div>

        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <button onClick={handleButtonClick} className={css.chooseFilesBtn}>
          Вибрати файли
        </button>

        <ul className={css.files}>
          {files.map((file, index) => (
            <li key={index} className={css.file}>
              <p className={css.fileName}> {file.name}</p>
              <button
                className={css.formDeleteFileBtn}
                onClick={() => removeFile(index)}
              >
                <IoClose className={css.formDeleteFileIcon} />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="submit"
          className={css.formSubmitBtn}
          disabled={!hasFiles}
        >
          Надіслати
        </button>
      </div>
    </form>
  );
}
