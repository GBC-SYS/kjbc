export { default as metadata } from "@/stories/app/meta";
import { BaseLayout, CommonTemplate } from "@/stories/app/layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <BaseLayout>
          <CommonTemplate>{children}</CommonTemplate>
        </BaseLayout>
      </body>
    </html>
  );
}
