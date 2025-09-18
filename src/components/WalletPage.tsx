import { useState } from "react";
import { ArrowLeft, FileText, ShoppingCart, CreditCard, X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WalletPage = () => {
  const [activeTab, setActiveTab] = useState<"recharge" | "withdraw">("recharge");
  const [selectedAmount, setSelectedAmount] = useState<number>(200);
  const [selectedMethod, setSelectedMethod] = useState<string>("Fpay");
  const [isBindBankOpen, setIsBindBankOpen] = useState(false);

  const amounts = [200, 300, 500, 800, 1000, 1500, 2000, 5000, 10000, 20000, 30000, 50000, 100000];
  const withdrawalAmounts = [100, 400, 600, 800, 1000, 2000, 5000, 10000];
  const paymentMethods = ["Fpay", "LGpay", "Other"];

  const banks = ["Abhyudaya Cooperative Bank",
    "Allahabad Bank",
    "Andhra Pradesh Grameena Vikas Bank",
    "Andhra Pragathi Grameena Bank",
    "Andhra Pradesh State Cooperative Bank",
    "Andhra Pragathi Cooperative Bank",
    "AU Small Finance Bank",
    "Airtel Payments Bank",
    "Axis Bank",
    "Bandhan Bank",
    "Bank of Baroda",
    "Bank of India",
    "Bank of Maharashtra",
    "Baroda Gujarat Gramin Bank",
    "Baroda Rajasthan Kshetriya Gramin Bank",
    "Baroda UP Bank",
    "Canara Bank",
    "Capital Small Finance Bank",
    "Catholic Syrian Bank (CSB Bank)",
    "Central Bank of India",
    "Chhattisgarh Rajya Gramin Bank",
    "City Union Bank",
    "Corporation Bank",
    "DCB Bank",
    "Dena Bank",
    "Dhanlaxmi Bank",
    "ESAF Small Finance Bank",
    "Equitas Small Finance Bank",
    "Federal Bank",
    "Fincare Small Finance Bank",
    "Fino Payments Bank",
    "HDFC Bank",
    "ICICI Bank",
    "IDBI Bank",
    "IDFC FIRST Bank",
    "Indian Bank",
    "Indian Overseas Bank",
    "India Post Payments Bank",
    "IndusInd Bank",
    "Jammu & Kashmir Bank",
    "Jana Small Finance Bank",
    "Jharkhand Rajya Gramin Bank",
    "Jio Payments Bank",
    "Karnataka Bank",
    "Karnataka Gramin Bank",
    "Karnataka Vikas Grameena Bank",
    "Karur Vysya Bank",
    "Kerala Gramin Bank",
    "Kotak Mahindra Bank",
    "Lakshmi Vilas Bank",
    "Madhya Pradesh Gramin Bank",
    "Maharashtra Gramin Bank",
    "Manipur Rural Bank",
    "Meghalaya Rural Bank",
    "Mizoram Rural Bank",
    "Nagaland Rural Bank",
    "North East Small Finance Bank",
    "Nutan Nagarik Sahakari Bank",
    "Odisha Gramya Bank",
    "Paschim Banga Gramin Bank",
    "Paytm Payments Bank",
    "Prathama UP Gramin Bank",
    "Punjab & Sind Bank",
    "Punjab Gramin Bank",
    "Punjab National Bank",
    "Rajasthan Marudhara Gramin Bank",
    "RBL Bank",
    "Sarva UP Gramin Bank",
    "Saptagiri Gramin Bank",
    "Shivalik Small Finance Bank",
    "South Indian Bank",
    "State Bank of India",
    "Suryoday Small Finance Bank",
    "Syndicate Bank",
    "Tamil Nadu Grama Bank",
    "Tamilnad Mercantile Bank",
    "Tripura Gramin Bank",
    "UCO Bank",
    "Union Bank of India",
    "United Bank of India",
    "Unity Small Finance Bank",
    "Ujjivan Small Finance Bank",
    "Utkal Grameen Bank",
    "Varanasi Kshetriya Gramin Bank",
    "Vidharbha Konkan Gramin Bank",
    "Yes Bank"
  ];

  const BankBindingForm = () => (
    <Dialog open={isBindBankOpen} onOpenChange={setIsBindBankOpen}>
      <DialogContent className="bg-card/95 backdrop-blur-sm border-border max-w-md mx-auto">
        <DialogHeader className="relative">
          <DialogTitle className="text-center text-foreground">Bind Bank Card</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 p-4">
          <div className="space-y-2">
            <Select>
              <SelectTrigger className="bg-input border-border text-foreground h-10">
                <SelectValue placeholder="Please Select a Bank" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank} className="text-popover-foreground">
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Input 
              placeholder="Please Enter Your Name" 
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input 
              placeholder="Please Enter Your Bank Card Number" 
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input 
              placeholder="Please Enter Your IFSC Code" 
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="space-y-2">
            <Input 
              placeholder="Please Enter Your Email" 
              className="bg-input border-border text-foreground placeholder:text-muted-foreground h-10"
            />
          </div>
          <div className="text-center text-primary text-sm py-4">
            Please fill in the withdrawal bank information correctly, otherwise you will be responsible for the withdrawal loss!
          </div>
          <Button 
            className="w-full bg-wallet-confirm-button hover:bg-wallet-confirm-button/90 text-white h-10"
            onClick={() => setIsBindBankOpen(false)}
          >
            Confirm
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );

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
          <ArrowLeft className="w-6 h-6 text-muted-foreground" />
          <FileText className="w-6 h-6 text-muted-foreground" />
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
        {activeTab === "recharge" ? (
          <>
            {/* Payment Method Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-medium text-muted-foreground">Recharge Method</h3>
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
                    className="h-8"
                  >
                    {method}
                  </Button>
                ))}
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Deposit Amount</h3>
              <div className="grid grid-cols-4 gap-2">
                {amounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAmount(amount)}
                    className={`h-10 ${
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
              className="w-full h-12 bg-wallet-confirm-button hover:bg-wallet-confirm-button/90 text-white text-base font-semibold rounded-lg"
              size="lg"
            >
              Confirm
            </Button>
          </>
        ) : (
          <>
            {/* Bind Bank Card Section */}
            <Card 
              className="p-4 bg-card border-2 border-dashed border-primary/30 hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => setIsBindBankOpen(true)}
            >
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Plus className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-medium underline text-sm">Bind Bank Card</span>
              </div>
            </Card>

            {/* Withdrawal Information */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground">Withdrawal Information</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Maximum Withdrawable Amount:</span>
                  <span className="text-foreground">₹ 0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Currently Selected Amount:</span>
                  <span className="text-foreground">₹ 100</span>
                </div>
                <div className="text-foreground text-center py-2">
                  The Current Withdrawal Amount Exceeds the Maximum Withdrawable Amount
                </div>
              </div>
            </div>

            {/* Withdrawal Amount Selection */}
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Withdrawal Amount</h3>
              <div className="grid grid-cols-4 gap-2">
                {withdrawalAmounts.map((amount) => (
                  <Button
                    key={amount}
                    variant={selectedAmount === amount ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAmount(amount)}
                    className={`h-10 ${
                      selectedAmount === amount
                        ? "bg-wallet-amount-button-selected border-wallet-amount-button-selected text-background"
                        : "bg-wallet-amount-button border-border text-foreground hover:bg-muted"
                    }`}
                  >
                    ₹ {amount}
                  </Button>
                ))}
              </div>
            </div>

            {/* Confirm Button */}
            <Button 
              className="w-full h-12 bg-wallet-confirm-button hover:bg-wallet-confirm-button/90 text-white text-base font-semibold rounded-lg"
              size="lg"
            >
              Confirm
            </Button>

            {/* VIP Info */}
            <div className="text-center text-primary text-sm">
              After becoming a VIP, you can withdraw immediately
            </div>
          </>
        )}
      </div>

      <BankBindingForm />
    </div>
  );
};

export default WalletPage;
