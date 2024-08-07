import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IdeaType } from "./components/types/IdeaType";


export const useIdeaStore = create<IdeaType>()(
    persist(
        (set) => ({
            'Target Market':'',
            'Problem':{
                'Assumption':[],
                'Fact':[]
            },
            'Solution':'',
            'Survey Method':[''],
            'Competitor':[''],
            'Prototype':''

            // setUser: (user) => {
            //     set({
            //         session: user.session,
            //         fullname: user.fullname,
            //         username: user.username,
            //         email: user.email,
            //         role: user.role
            //     });
            // },
            // resetUser:()=>{
            //     set({
            //         session: null,
            //         fullname: '',
            //         username: '',
            //         email: '',
            //         role: ''
            //     });
            // }
        }),
        {
            name: "idea-storage", // Name of the item in the storage
            // storage: () => localStorage, // You can also use sessionStorage or any custom storage
        }
    )
);