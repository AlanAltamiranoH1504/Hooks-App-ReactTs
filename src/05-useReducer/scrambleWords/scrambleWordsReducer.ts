export const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

// * INTERFAZ DEL ESTADO
interface ScrambleState {
    words: string[],
    currentWord: string,
    scrambledWord: string,
    guess: string,
    points: number,
    errorCounter: number,
    maxAllowErrors: number,
    skipCounter: number,
    maxSkips: number,
    isGameOver: boolean
}

// * ACCIONES PERMITIDAS PARA EL REDUCER
type ScrambleActions =
    | { type: "SET_GUESS", payload: { guess: string } }
    | { type: "CHECK_ANSWER" }
    | { type: "SKIP_ANSWER" }
    | { type: "RESET_GAME" }
    | { type: "prueba" }

export const getInitialState = (): ScrambleState => {
    const suffleWords = shuffleArray([...GAME_WORDS]);
    return {
        words: suffleWords,
        points: 0,
        errorCounter: 0,
        maxSkips: 3,
        maxAllowErrors: 3,
        skipCounter: 0,
        isGameOver: false,
        guess: "",
        currentWord: suffleWords[0],
        scrambledWord: scrambleWord(suffleWords[0])
    }
}

export const scrambleWordsReducer = (state: ScrambleState, action: ScrambleActions): ScrambleState => {
    switch (action.type) {
        case "SET_GUESS":
            return {
                ...state,
                guess: action.payload.guess
            }
        case "CHECK_ANSWER": {
            if (state.guess === state.currentWord) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    points: state.points + 1,
                    guess: "",
                    words: newWords,
                    currentWord: newWords[0],
                    scrambledWord: scrambleWord(newWords[0])
                }
            }
            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: "",
                isGameOver: (state.errorCounter + 1) >= state.maxAllowErrors
            }
        }
        case "SKIP_ANSWER": {
            if (state.skipCounter >= state.maxSkips) return {...state};
            const newWords = state.words.slice(1);
            return {
                ...state,
                skipCounter: state.skipCounter + 1,
                guess: "",
                // isGameOver: (state.skipCounter + 1) >= state.maxSkips,
                words: newWords,
                currentWord: newWords[0],
                scrambledWord: scrambleWord(newWords[0])
            }
        }
        case "RESET_GAME": {
            return {
                ...state,
                points: 0,
                errorCounter: 0,
                guess: "",
                skipCounter: 0,
                words: shuffleArray(GAME_WORDS),
                currentWord: state.words[0],
                isGameOver: false
            }
        }
        default:
            return state;
    }
}