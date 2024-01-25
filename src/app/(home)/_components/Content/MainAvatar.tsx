import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MainAvatar() {
  return (
    <Avatar aria-label="Avatar" className="mx-auto mt-6 h-48 w-48" style={{}}>
      <AvatarImage src="https://github.com/Brxlx.png" alt="@Brxlx" />
      <AvatarFallback>Bruno Santos</AvatarFallback>
    </Avatar>
  );
}
