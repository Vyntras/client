// import { NextResponse, NextRequest } from 'next/server'
// import { API } from '../../../../../env.config'
// import { cookies } from 'next/headers'

// export async function GET(req: NextRequest) {
//     const { searchParams } = new URL(req.url)
//     const code = searchParams.get('code')

//     if (!code) {
//         return NextResponse.redirect(`${String(process.env.NEXT_PUBLIC_DOMAIN_CLIENT)}/signin`)
//     }

//     const clientId = String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
//     const clientSecret = String(process.env.GOOGLE_CLIENT_SECRET)
//     const redirectUri = `${process.env.NEXT_PUBLIC_DOMAIN_CLIENT}/api/auth/callback`

//     const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams({
//             code,
//             client_id: clientId,
//             client_secret: clientSecret,
//             redirect_uri: redirectUri,
//             grant_type: 'authorization_code',
//         }),
//     });

//     const tokenData = await tokenRes.json()

//     const id_token = tokenData.id_token;

//     const profile = await fetch(`${API}/auth`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ tokenId: id_token })
//     })

//     console.log(await profile.json())
//     const response = NextResponse.redirect(`${String(process.env.NEXT_PUBLIC_DOMAIN_CLIENT)}/`);

//     // console.log(cookies().get('auth-token'))

//     response.headers.set(
//         'Set-Cookie',
//         // serialize('auth-token', id_token, {
//         //     httpOnly: true,
//         //     secure: process.env.NODE_ENV === 'production',
//         //     maxAge: 60 * 60 * 24 * 7,
//         //     path: '/',
//         // })
//         cookies().set('auth_token', id_token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             maxAge: 60 * 60 * 24 * 7,
//             path: '/',
//         }).toString()
//     );

//     return response;


// }