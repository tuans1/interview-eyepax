export default function Empty({
  message = "No items in cart",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 text-gray-200 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <p className=" text-center">{message}</p>
    </div>
  );
}
