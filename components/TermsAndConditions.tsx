import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"

interface TermsAndConditionsProps {
  onAccept: () => void
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onAccept }) => {
  const [accepted, setAccepted] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    const scrolled = target.scrollTop
    const maxScrollHeight = target.scrollHeight - target.clientHeight
    const percentage = (scrolled / maxScrollHeight) * 100
    setScrollPercentage(percentage)
  }

  return (
    <Card
      className={cn(
        "w-full max-w-[800px] mx-auto",
        "rounded-2xl",
        "bg-white dark:bg-zinc-900",
        "border border-zinc-200 dark:border-zinc-800",
        "shadow-sm",
      )}
    >
      <CardHeader className="border-b border-zinc-200 dark:border-zinc-800">
        <CardTitle className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Terms and Conditions</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-zinc-200 dark:text-zinc-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
            />
            <circle
              className="text-indigo-600 dark:text-indigo-400"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="44"
              cx="50"
              cy="50"
              strokeDasharray={`${2 * Math.PI * 44}`}
              strokeDashoffset={`${2 * Math.PI * 44 * (1 - scrollPercentage / 100)}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              {Math.round(scrollPercentage)}%
            </span>
          </div>
        </div>
        <div
          className="h-64 overflow-y-auto border border-zinc-200 dark:border-zinc-700 rounded-lg p-4 text-zinc-900 dark:text-zinc-100 space-y-8"
          onScroll={handleScroll}
        >
          <h1 className="text-2xl md:text-4xl font-bold">Terms of Service for Users</h1>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Introduction</h2>
            <p>
              Welcome to EventAura, the preferred event management platform for student-driven clubs. This document
              governs your access to and use of EventAura for purchasing tickets and attending events.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Ticket Purchase and Payment</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Secure Purchase:</strong> Tickets can be
              purchased through EventAura using our secure payment gateway. By purchasing a ticket, you agree to the
              terms set forth by the event organizer and EventAura.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Payment Processing:</strong> Payments are
              processed securely by PhonePe. EventAura does not store or have access to your credit card information.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Payment Failures:</strong> EventAura does not
              handle refunds for any transactions, including payment failures. All refund requests must be handled
              directly by the event manager.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Ticket Confirmation and Use</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Email Confirmation:</strong> Upon purchase, you
              will receive an email confirmation with a QR code. This code is required for event entry and is valid for
              a single use only.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Entry to Event:</strong> Present your QR code at
              the event entrance to gain access. The unique QR code is valid only once. Tampering with any QR code will
              result in severe actions and penalties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Refund Policy</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Final Sales:</strong> All ticket sales are final.
              Refunds are issued only if the event is canceled and not rescheduled.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Refund Handling:</strong> All ticket sales are
              final, and we do not initiate any refunds, even if the event is canceled.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Privacy Policy for Users</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Data Collection:</strong> We collect necessary
              information during the ticket purchase process, such as your name, email address, and payment details via
              our payment gateway partner, PhonePe.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Data Use:</strong> We use your information to
              process transactions and send you event-related communications. Your data will be transferred to the event
              managers and deleted from our servers for data privacy.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Data Security:</strong> We implement strong
              security measures to protect your data. Your payment information is processed and secured by PhonePe.
              EventAura does not store any user financial data (i.e., payment details) for security reasons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Liability and Disclaimer</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Event Manager Responsibility:</strong> Event
              managers can access your data for event-related purposes. EventAura is not involved in any misuse of your
              data by event managers.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Security of Transactions:</strong> Every
              transaction is secured by PhonePe. EventAura ensures the integrity and security of the payment process.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Limitations on Liability:</strong> EventAura is
              not responsible for any issues arising from event entry, event cancellation, or misuse of data by event
              managers beyond our control.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Code of Conduct for Participants</h2>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Compliance with Rules:</strong> Participants must
              comply with the event&apos;s rules and regulations as set forth by the event organizers.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Prohibited Actions:</strong> Any fraudulent
              activity, including tampering with QR codes, will result in severe penalties and potential legal action.
            </p>
            <p>
              <strong className="text-indigo-600 dark:text-indigo-400">Respectful Behavior:</strong> Participants are
              expected to behave respectfully and adhere to the event&apos;s code of conduct. Any form of harassment or
              disruptive behavior is not tolerated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Changes to Terms</h2>
            <p>
              EventAura reserves the right to modify these terms at any time. Any changes will be communicated to users
              via email or through our platform. Continued use of the platform after such changes constitutes acceptance
              of the new terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
              EventAura operates. Any disputes arising out of or related to these terms shall be resolved in the courts
              of that jurisdiction.
            </p>
          </section>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={accepted}
            onCheckedChange={(checked) => setAccepted(checked as boolean)}
            className="border-zinc-300 dark:border-zinc-600"
          />
          <label htmlFor="terms" className="text-sm text-zinc-700 dark:text-zinc-300">
            I accept the terms and conditions
          </label>
        </div>
        <Button
          onClick={onAccept}
          disabled={!accepted}
          className={cn(
            "w-full px-4 py-3 rounded-xl text-sm font-medium",
            "bg-indigo-600 text-white",
            "hover:bg-indigo-700",
            "transition-colors duration-300",
            "flex items-center justify-center gap-2",
            "disabled:opacity-50 disabled:cursor-not-allowed",
          )}
        >
          Continue
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

