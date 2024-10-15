import { Link } from "react-router-dom"
// import { Button } from "./ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Header = () => {
  return (
    <div className="p-10 flex justify-between items-center">
        <Link>
            zest
        </Link>
        <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Header