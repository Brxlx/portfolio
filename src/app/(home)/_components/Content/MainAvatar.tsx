import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MainAvatar() {
  return (
    <Avatar aria-label="Avatar" className="mx-auto my-7 h-48 w-48 shadow-2xl shadow-slate-100">
      <AvatarImage src="/profile-1.png" alt="@Brxlx" />
      <AvatarFallback>Bruno Santos</AvatarFallback>
    </Avatar>
  );
}
