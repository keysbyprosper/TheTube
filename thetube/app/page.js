import CloudUpload from "@/cloudinary/CloudUpload";
import LoginWithGoogle from "@/firebase/LoginWithGoogle.js";
import LogOutWithGoogle from "@/firebase/LogOutWithGoogle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello world
      <button onClick={LoginWithGoogle}>login</button>
      <button onClick={LogOutWithGoogle}>logout</button>
      <CloudUpload/>
    </main>
  );
}
