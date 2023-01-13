import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  return (
    <div>
      <p>Topページ</p>
      <button onClick={async () => {
        await router.push("/about");
      }}
      data-testid="about-button"
      >
        Aboutページへ移動
      </button>
    </div>
  )
}