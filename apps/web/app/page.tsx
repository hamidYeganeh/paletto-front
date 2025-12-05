"use client";

import Button from "@repo/ui/Button";
import Input from "@repo/ui/Input";
import TextField from "@repo/ui/TextField";
import Modal from "@repo/ui/Modal";
import Alert from "@repo/ui/Alert";
import Card from "@repo/ui/Card";
import Checkbox from "@repo/ui/Checkbox";
import Switch from "@repo/ui/Switch";
import Chip from "@repo/ui/Chip";
import Tooltip from "@repo/ui/Tooltip";
import Avatar from "@repo/ui/Avatar";
import Link from "next/link";
import Tabs from "@repo/ui/Tabs";
import Accordion from "@repo/ui/Accordion";
import Dropdown from "@repo/ui/Dropdown";

export default function Home() {
  return (
    <div className="bg-linear-0 from-primary-200 to-primary-800 min-h-dvh">
      <div className="bg-white min-h-64 flex flex-col gap-6 items-start justify-center p-6">
        <div className="flex gap-3 flex-wrap">
          <Button color="primary" variant="contained">
            Primary
          </Button>
          <Button color="secondary" variant="outlined">
            Secondary
          </Button>
          <Button color="success" variant="flat">
            Success
          </Button>
          <Button color="danger" variant="ghost">
            Danger
          </Button>
          <Button color="warning" variant="light">
            Warning
          </Button>
          <Button color="info" variant="faded">
            Info
          </Button>
        </div>

        <div className="w-full">
          <Tabs
            variant="light"
            color="primary"
            items={[
              {
                key: "tab1",
                title: "Tab 1",
                content: <div>Tab 1 content</div>,
              },
              {
                key: "tab2",
                title: "Tab 2",
                content: <div>Tab 2 content</div>,
              },
              {
                key: "tab3",
                title: "Tab 3",
                content: <div>Tab 3 content</div>,
              },
            ]}
          />
        </div>

        <div className="w-full">
          <Accordion
            variant="light"
            color="secondary"
            multiple
            items={[
              {
                key: "a1",
                title: "Item 1",
                content: <div>Item 1 content</div>,
              },
              {
                key: "a2",
                title: "Item 2",
                content: <div>Item 2 content</div>,
              },
              {
                key: "a3",
                title: "Item 3",
                content: <div>Item 3 content</div>,
              },
            ]}
          />
        </div>

        <div>
          <Dropdown
            variant="flat"
            color="info"
            trigger={
              <Button variant="flat" color="info">
                Open menu
              </Button>
            }
            items={[
              { key: "one", label: "Action One" },
              { key: "two", label: "Action Two" },
              { key: "three", label: "Action Three" },
            ]}
          />
        </div>
        <div className="flex gap-4 w-full">
          <TextField
            label="Email"
            placeholder="john@example.com"
            variant="outlined"
            color="secondary"
            fullWidth
          />
          <Input
            label="Username"
            placeholder="john"
            variant="contained"
            color="primary"
            startIcon={<span>@</span>}
          />
        </div>

        <Alert
          title="Saved"
          description="Your changes have been saved."
          color="success"
          variant="contained"
        />

        <Card
          header="Profile"
          footer={<span>Footer content</span>}
          variant="outlined"
          color="info"
        >
          <div className="text-sm">This is a card body.</div>
        </Card>

        <div className="flex items-center gap-6">
          <Checkbox label="Accept terms" />
          <Switch label="Enable notifications" />
        </div>

        <div className="flex items-center gap-3">
          <Chip variant="flat" color="primary">
            Primary
          </Chip>
          <Chip variant="outlined" color="secondary">
            Secondary
          </Chip>
          <Chip variant="ghost" color="danger">
            Danger
          </Chip>
        </div>

        <div className="flex items-center gap-4">
          <Tooltip
            content={<span>Top tooltip</span>}
            variant="contained"
            color="default"
          >
            <Button variant="light" color="default">
              Hover me
            </Button>
          </Tooltip>
          <Tooltip
            content={<span>Right tooltip</span>}
            variant="flat"
            color="info"
            placement="right"
          >
            <Button variant="flat" color="info">
              Hover me
            </Button>
          </Tooltip>
        </div>

        <div className="flex items-center gap-4">
          <Avatar name="Jane Doe" color="primary" variant="contained" />
          <Avatar name="John Smith" color="secondary" variant="outlined" />
          <Avatar name="Alex" color="danger" variant="ghost" isBordered />
        </div>

        <Modal
          open={false}
          onOpenChange={() => {}}
          variant="light"
          color="default"
          title="Demo Modal"
          footer={
            <Button variant="contained" color="primary">
              Close
            </Button>
          }
        >
          <div className="size-48 bg-red-400" />
        </Modal>
      </div>
      <div className="max-w-4xl mx-auto p-10 text-white">
        <h1 className="text-5xl font-bold">Paletto</h1>
        <p className="mt-4 text-lg">Welcome. Choose an action:</p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/auth/register"
            className="rounded bg-white/20 px-4 py-2 hover:bg-white/30"
          >
            Register
          </Link>
          <Link
            href="/auth/login"
            className="rounded bg-white/20 px-4 py-2 hover:bg-white/30"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
