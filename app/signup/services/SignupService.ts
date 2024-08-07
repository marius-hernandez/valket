import { supabase } from "@/lib/supabaseClient"

export const signupUser=async(email:string, password:string)=>{
    try {
        const {data, error}=await supabase.auth.signUp({email,password})
        if(error) throw error
        if(data.user?.identities?.length != 0) throw Error('User already exists')
        return data
    } catch (error) {
        return error
    }
}
