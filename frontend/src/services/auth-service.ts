import { supabase } from "../@libs/supabase";
import { ICredential } from "../@libs/types";

const sigIn = async (credential: ICredential) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: credential.username,
        password: credential.password
    });

        if (error) throw error;

        return data;
    }

export const AuthService = {
    sigIn
}