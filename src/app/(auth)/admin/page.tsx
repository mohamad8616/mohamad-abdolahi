import CreateProjectForm from "@/components/UI/CreateProjectForm";

export default async function AdminPage() {
  return (
    <main className="h-auto min-h-screen py-12">
      <div className="mx-auto max-w-2xl px-4">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-200">
            Add New Projeoct
          </h1>
          <p className="text-gray-200">
            Fill in the details to add a new project to your portfolio
          </p>
        </div>

        <CreateProjectForm />
      </div>
    </main>
  );
}
