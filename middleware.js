import { NextResponse } from 'next/dist/server/web/spec-extension/response';

export default function middleware(req) {
  let verify = req.cookies.get('loggedIn');
  let url = req.url;

  if (!verify && url.includes('/admin')) {
    return NextResponse.redirect('https://erikrobles.xyz/login');
  }
  if (!verify && url.includes('/signup')) {
    return NextResponse.redirect('https://erikrobles.xyz/login');
  }
  if (verify && url.includes('/login')) {
    return NextResponse.redirect('https://erikrobles.xyz/admin');
  }
}
