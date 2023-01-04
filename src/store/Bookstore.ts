import create from 'zustand';

interface IBook {
    amount: number 
    author:string
    updateAmount: (newAmount: number) => void
}

export const useBookStore = create<IBook>( (set, get) => ({
    amount: 40,
    author:"ayush thapa",

    updateAmount: (newAmount: number ) => {

        // const amountState = get().amount

        // set({ amount: newAmount + amountState })
        //is the same as:
        set(state => ({ amount: newAmount + state.amount  }))
    },
}));