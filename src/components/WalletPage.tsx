import { useState } from "react";
import { ArrowLeft, FileText, ShoppingCart, CreditCard, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState<"recharge" | "withdraw">("recharge");
  const [selectedAmount, setSelectedAmount] = useState<number>(200);
  const [selectedMethod, setSelectedMethod] = useState<string>("Fpay");

  const amounts = [200, 300, 500, 800, 1000, 1500, 2000, 5000, 10000, 20000, 30000, 50000, 100000];
  const paymentMethods = ["Fpay", "LGpay", "Other"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">₹</span>
          </div>
          <span className="text-lg font-semibold text-primary">200</span>
        </div>
        <div className="flex items-center gap-3">
          <FileText className="w-6 h-6 text-muted-foreground" />
          <ArrowLeft className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-card m-4 rounded-lg p-1">
        <button
          onClick={() => setActiveTab("recharge")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all ${
            activeTab === "recharge"
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Recharge
        </button>
        <button
          onClick={() => setActiveTab("withdraw")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all ${
            activeTab === "withdraw"
              ? "bg-accent text-accent-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <CreditCard className="w-4 h-4" />
          Withdraw
        </button>
      </div>

      <div className="px-4 space-y-6">
        {/* Payment Method Selection */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              {activeTab === "recharge" ? "Recharge Method" : "Withdrawal Method"}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {selectedMethod}
            </Badge>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {paymentMethods.map((method) => (
              <Button
                key={method}
                variant={selectedMethod === method ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMethod(method)}
                className="h-10"
              >
                {method}
              </Button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">
            {activeTab === "recharge" ? "Withdrawal Amount" : "Deposit Amount"}
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {amounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedAmount(amount)}
                className={`h-12 ${
                  selectedAmount === amount
                    ? "bg-wallet-amount-button-selected border-wallet-amount-button-selected text-background"
                    : "bg-wallet-amount-button border-border text-foreground hover:bg-muted"
                }`}
              >
                ₹ {amount.toLocaleString("en-IN")}
              </Button>
            ))}
          </div>
        </div>

        {/* Activity Section */}
        <div>
          <h3 className="text-sm font-medium text-muted-foreground mb-3">Participate in Activity</h3>
          <div className="grid grid-cols-2 gap-3">
            <Card className="p-4 bg-card border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <div className="text-2xl">🎁</div>
                </div>
                <span className="text-sm font-medium">Cash Back</span>
              </div>
            </Card>
            <Card className="p-4 bg-card border-border hover:bg-muted/50 transition-colors cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <div className="text-2xl">✅</div>
                </div>
                <span className="text-sm font-medium">Sign-In</span>
              </div>
            </Card>
          </div>
        </div>

        {/* Amount Summary */}
        <Card className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Deposit Amount</div>
              <div className="text-xl font-bold text-primary">₹{selectedAmount}</div>
            </div>
            <div className="text-2xl font-bold text-muted-foreground">+</div>
            <div className="space-y-1 text-right">
              <div className="text-sm text-muted-foreground">Cashback amount</div>
              <div className="text-xl font-bold text-accent">₹{Math.floor(selectedAmount * 0.1)}</div>
            </div>
          </div>
        </Card>

        {/* Confirm Button */}
        <Button 
          className="w-full h-14 bg-wallet-confirm-button hover:bg-wallet-confirm-button/90 text-white text-lg font-semibold rounded-lg"
          size="lg"
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default WalletPage;