import { FC, useRef } from 'react';
import classes from './ZooComponent.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnimals } from '../../store/zoo/zooSelector';
import { addNewAnimal, deleteAnimal } from '../../store/zoo/zooSlice';

const ZooComponent: FC = () => {
  const dispatch = useDispatch();
  const animals = useSelector(selectAnimals);
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddNewAnimal = () => {
    const newAnimal = nameInputRef?.current?.value;
    if (newAnimal !== undefined && newAnimal.length >= 1) {
      dispatch(addNewAnimal({ name: nameInputRef.current?.value || '' }));
      alert(`New animal '${newAnimal}' added to the zoo!`);
      nameInputRef.current!.value = '';
    }
  };

  const handleDeleteAnimal = (id: number, name: string) => {
    dispatch(deleteAnimal({ id }));
    alert(`The animal '${name}' is removed from the zoo!`);
  };

  return (
    <>
      <h1>Allatkert</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <ul className={classes.noBullets}>
          {animals.map((animal: { id: number; name: string }) => (
            <li key={animal.id}>
              <div style={{ float: 'left' }}>{animal.name}</div>

              <button
                onClick={() => handleDeleteAnimal(animal.id, animal.name)}
                style={{ float: 'right' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <input ref={nameInputRef} type="text"></input>
        <button onClick={handleAddNewAnimal}>Add</button>
      </div>
    </>
  );
};

export default ZooComponent;
