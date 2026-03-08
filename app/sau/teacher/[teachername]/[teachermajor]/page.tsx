interface PageParams {
  params: {
    teachername: string;
    teachermajor: string;
  };
}
export default async function Page({ params }: PageParams) {
  const { teachermajor, teachername } = await params;
  return (
    <div>
      ID: {teachername}
      <br />
      สังกัด:{teachermajor}
      <br />
      wow wow wow
      <br />
      hello
    </div>
  );
}
