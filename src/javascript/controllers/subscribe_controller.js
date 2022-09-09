import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["email"]
  go(event) {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey":
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYjkzOWY2NmI2ODVlNTI4ZDZmNzQwYmU4MTI0ZmJkMzU0ZmYyNDc4YzZmZmZjNTAxZTYyZGM3OWNkNDJkNzJmZjBiOWFlZWNhM2E4N2ZkNDciLCJpYXQiOjE2NjI3NDg4MjIuNzI4MjAzLCJuYmYiOjE2NjI3NDg4MjIuNzI4MjA2LCJleHAiOjQ4MTg0MjI0MjIuNzIzLCJzdWIiOiIxNzQ1MzkiLCJzY29wZXMiOltdfQ.ijZHSjbRxAQMbQqk-LGoEiEHj1uwB28GsIF7kvozHTEaLXZhRcFKVaudkwhE4kZeGzMbXROKnnaXYeCzgfjK0FMP0FcecJ5lVjAlVTWHsWHOcvGPxAh-kJZBWmdKsouiAlLbKxAKBXpDsJBPE_zZbe_AsCcHzpXcaloyystbstJAdkdlZICCGX8IA5k3g7G6d_dNjF-LMpE79O6pljWSZzi6ul3FNHfGIQqpW3Jx5zdvH1ERIOVXF3Mh5pS0ydfyeP4HquWVW5xPgmSdhQyyaInP3bdZBC3yi0eX-Z8gXlyOQEFplad0Ik-VDerGm_uhAXn-6emYMzlEmOimtfp0M4h4bXLYd3OVGc4zyR5x2HJ-ExuM0CqWtfmB7MDirPQ-ovp9UkL8Y83I9tpaONWK07CFavKn_OTstVWqnxFJp8lucgWqPXTgFtWG5UmEeeI_57z4SZqJRLIX6HyGRmV64Ea8cJBp736zcjxeH7g2KbDsgdyYBMujFMJqLgzrP57keTt0t4A-yLTN_bS9SfCDj16gLCfc5e5njQAv2e_hr-qQ2R9_tG3jXsqE_5mNq3kzaRqrBUE8wqRq6ZXAiVTI4y1Fi-yGQ27kTjKcpOUtL93Dj67JIyvNwO7a_dAHwf4bRc5LG336Bhp5tqOwpkktM7M4lW9fXB6Yi_MqMkpx6gE",
      },
      body: JSON.stringify({ email: this.emailTarget.value }),
    }

    fetch("https://api.mailerlite.com/api/v2/subscribers", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data)
        setTimeout(() => {
          window.location.href = "https://railsui.com/success.html"
        }, 300)
      })
      .catch((err) => console.error(err))
  }
}
