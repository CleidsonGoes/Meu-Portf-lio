function ContactCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: any;
}) {
  return (
    <div className="flex flex-col items-center  p-4">
      <Icon className="text-2xl mb-2 text-green-500" />
      <h2 className="text-base font-semibold">{title}</h2>
      <p className="text-gray-500 text-sm">{value}</p>
    </div>
  );
}

export default ContactCard;
