import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ConsentForm = ({ onConsentChange }: { onConsentChange: (consent: boolean) => void }) => {
  const [consent, setConsent] = useState(false);

  const handleConsentChange = (checked: boolean) => {
    setConsent(checked);
    onConsentChange(checked);
  };

  return (
    <div className="flex items-start space-x-2">
      <Checkbox 
        id="consent" 
        checked={consent}
        onCheckedChange={handleConsentChange}
      />
      <Label htmlFor="consent" className="text-sm text-muted-foreground">
        Я даю согласие на обработку моих персональных данных в соответствии с 
        <Link to="/privacy-policy" className="text-primary hover:underline mx-1">Политикой конфиденциальности</Link>
        и принимаю условия
        <Link to="/user-agreement" className="text-primary hover:underline mx-1">Пользовательского соглашения</Link>.
      </Label>
    </div>
  );
};

export default ConsentForm;
