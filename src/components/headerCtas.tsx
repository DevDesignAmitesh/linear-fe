import Button from "./button";

export default function HeaderCtas() {
  return (
    <div className="flex justify-center items-center gap-4">
      <Button type="secondary" label="Log in" />
      <Button type="primary" label="Sign up" />
    </div>
  );
}
