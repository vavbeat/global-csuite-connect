import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const RevokeConsent = () => {
  const { toast } = useToast();

  const handleRevokeConsent = () => {
    // Отправляем уведомление на email администратора
    // В реальной реализации здесь должен быть вызов API
    console.log("Отзыв согласия на обработку персональных данных");
    
    // Показываем уведомление пользователю
    toast({
      title: "Запрос на отзыв согласия отправлен",
      description: "Мы получили ваш запрос на отзыв согласия на обработку персональных данных. В ближайшее время мы свяжемся с вами для уточнения деталей.",
    });
  };

  return (
    <div className="mt-8 p-4 border border-border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Отзыв согласия на обработку персональных данных</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Вы можете в любой момент отозвать свое согласие на обработку персональных данных. 
        Для этого нажмите кнопку ниже, и мы свяжемся с вами для уточнения деталей.
      </p>
      <Button variant="outline" onClick={handleRevokeConsent}>
        Отозвать согласие
      </Button>
    </div>
  );
};

export default RevokeConsent;
