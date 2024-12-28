import {Search} from "lucide-react";

export default function Header() {
    return (
        <header className="p-5 shadow-sm border-b-2 flex justify-between items-center">
            <div className="flex gap-2 items-center p-2 border rounded-md max-w-md">
                <Search />
                <input type="text" placeholder={"Search ....."} className={'outline-none'} />
            </div>

            <div><h2 className="bg-primary p-1 rounded-full text-xs text-white px-2">Join Membership just for $9.99/Month</h2></div>
        </header>
    );
}

/*
*
*
* https://app.xata.io/workspaces/Muhammad-Idrees-s-workspace-saqaui
* api key gemini AIzaSyDwUfsx1pTm3kT67SaGS6fof1214Qg_6oY
* https://aistudio.google.com/apikey
*
* https://orm.drizzle.team/docs/get-started/neon-new
*
* https://www.youtube.com/watch?v=egQajXL7nn4
*
* */

/*
*
* NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_dG9nZXRoZXItY3Jvdy0xNC5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_wBQS0xAnAi8VF9G2cfLlo1GWqv2b4ccpNihsnT3mmQ
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
* */