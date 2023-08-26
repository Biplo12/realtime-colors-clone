import { useRouter } from 'next/navigation';
import { useAppSelector } from 'store/store-hooks';

const useUpdateURL = () => {
  const router = useRouter();
  const colors = useAppSelector((state) => state.global.colors);
  const selectedColors = Object.keys(colors).filter(
    (color) => colors[color as keyof typeof colors]
  );
  const queryParams = selectedColors
    .map((color) => {
      const colorValue = colors[color as keyof typeof colors].color;
      return `${encodeURIComponent(colorValue as string)}`;
    })
    .join('-');

  if (typeof window !== 'undefined') {
    router.push(`/?colors=${queryParams.replaceAll('%23', '')}`);
  }
};

export default useUpdateURL;
