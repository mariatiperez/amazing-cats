export default function PageTitle({ title = "" }) {
  return (
    <h1 className="text-green-700 dark:text-green-600 font-bold text-3xl mb-6">
      {title}
    </h1>
  );
}
