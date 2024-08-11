import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "~/components/ui/alert-dialog";

  
  const QuizSubmissionAlertDialog = ({
    open,
    onClose,
    onSubmit,
  }: {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
  }) => {
    return (
      <AlertDialog open={open} onOpenChange={onClose} >
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-black">Submit Quiz</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="text-gray-700">
            <p>Sure! do u want to  submit  the quiz</p>
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onSubmit}>Submit</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };
  
  export default QuizSubmissionAlertDialog;
  