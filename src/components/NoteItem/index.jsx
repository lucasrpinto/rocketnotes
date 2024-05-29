import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, onChange, ...rest }) {
    return (
        <Container $isNew={isNew}>
            <input 
                type="text" 
                value={value}
                readOnly={!isNew}
                onChange={onChange} // Adicione o handler onChange
                {...rest}
            />

            <button 
                onClick={onClick}
                type="button"
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    );
}
