import "@mantine/core/styles.css";
import "./home.css";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Box,
  Burger,
  Button,
  Card,
  Divider,
  Group,
  MantineProvider,
  NavLink,
  Paper,
  Progress,
  RingProgress,
  ScrollArea,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  createTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconArrowUpRight,
  IconBook2,
  IconCalendar,
  IconChartBar,
  IconChevronRight,
  IconClipboardCheck,
  IconCoin,
  IconHome2,
  IconPlus,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import React from "react";
import { createRoot } from "react-dom/client";

const theme = createTheme({
  fontFamily: 'Inter, "Be Vietnam Pro", Arial, sans-serif',
  headings: {
    fontFamily: 'Inter, "Be Vietnam Pro", Arial, sans-serif',
    fontWeight: "900",
  },
  colors: {
    tuteGreen: [
      "#e3fff7",
      "#c7f8eb",
      "#95ecd7",
      "#5edfc1",
      "#2ed3af",
      "#00a884",
      "#008f70",
      "#007259",
      "#005747",
      "#003f34",
    ],
    tuteYellow: [
      "#fffbe0",
      "#fff6b0",
      "#fff275",
      "#f8ea45",
      "#ebd921",
      "#d0bf12",
      "#a7960d",
      "#80720a",
      "#5f5407",
      "#403904",
    ],
    ink: [
      "#f5f5f3",
      "#e5e5e1",
      "#c7c7c0",
      "#a7a79e",
      "#85857b",
      "#62625b",
      "#4d4d46",
      "#383833",
      "#202020",
      "#111111",
    ],
  },
  primaryColor: "tuteGreen",
  defaultRadius: 8,
});

const navItems = [
  { icon: IconHome2, label: "Tổng quan", active: true },
  { icon: IconCalendar, label: "Lịch dạy" },
  { icon: IconBook2, label: "Lớp học" },
  { icon: IconUsers, label: "Học sinh" },
  { icon: IconCoin, label: "Học phí" },
  { icon: IconClipboardCheck, label: "Bài tập" },
];

const stats = [
  { label: "Lớp đang dạy", value: "8", detail: "3 lớp có lịch hôm nay", icon: IconBook2 },
  { label: "Học sinh", value: "126", detail: "9 bạn cần theo dõi", icon: IconUsers },
  { label: "Điểm danh", value: "92%", detail: "Trung bình tuần này", icon: IconClipboardCheck },
  { label: "Học phí", value: "24", detail: "Khoản cần nhắc", icon: IconCoin },
];

const lessons = [
  {
    time: "18:00",
    title: "Toán 9A - Ôn hệ phương trình",
    meta: "16 học sinh - Phòng Zoom A",
    action: "Điểm danh",
    active: true,
  },
  {
    time: "19:30",
    title: "Hóa 10 - Cân bằng phản ứng",
    meta: "12 học sinh - Tài liệu đã gửi",
    action: "Giao bài",
  },
  {
    time: "20:45",
    title: "Lý 11 - Điện trường",
    meta: "14 học sinh - 2 bạn xin nghỉ",
    action: "Xem lớp",
  },
];

const tuitionRows = [
  { name: "Mai Anh", amount: "1.200.000đ", note: "Quá hạn 3 ngày" },
  { name: "Quốc Huy", amount: "900.000đ", note: "Đến hạn hôm nay" },
  { name: "Bảo Trâm", amount: "1.500.000đ", note: "Nhắc phụ huynh" },
];

const students = [
  { initials: "MA", name: "Mai Anh", note: "Vắng 2 buổi liên tiếp" },
  { initials: "QH", name: "Quốc Huy", note: "Chưa nộp bài tuần này" },
  { initials: "BT", name: "Bảo Trâm", note: "Cần nhắc học phí" },
];

function Header({ opened, toggle }) {
  return (
    <AppShell.Header className="mantine-home-header">
      <Group h="100%" px="xl" gap="lg" wrap="nowrap">
        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" aria-label="Mở menu" />
        <a className="mantine-home-logo" href="index.html" aria-label="TuteClass landing">
          <img src="/assets/tute-logo.png" alt="TuteClass" />
        </a>
        <TextInput
          className="mantine-home-search"
          leftSection={<IconSearch size={18} />}
          placeholder="Tìm lớp, học sinh, học phí..."
          visibleFrom="sm"
        />
        <Group gap="xs" ml="auto" wrap="nowrap">
          <ActionIcon variant="subtle" color="ink" radius="xl" visibleFrom="sm" aria-label="Lịch dạy">
            <IconCalendar size={20} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="ink" radius="xl" visibleFrom="sm" aria-label="Học phí">
            <IconCoin size={20} />
          </ActionIcon>
          <Button
            className="mantine-yellow-button"
            rightSection={<IconArrowUpRight size={16} />}
            radius="xl"
          >
            Tạo lớp
          </Button>
          <Group className="teacher-pill" gap="xs" wrap="nowrap">
            <Avatar color="orange" radius="xl" size={34}>
              TL
            </Avatar>
            <Text fw={800} visibleFrom="xs">
              Cô Lan
            </Text>
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}

function Navbar() {
  return (
    <AppShell.Navbar p="md" className="mantine-home-navbar">
      <Stack gap={6}>
        {navItems.map((item, index) => (
          <NavLink
            key={item.label}
            active={item.active}
            label={item.label}
            leftSection={
              <ThemeIcon variant={item.active ? "filled" : "light"} color={item.active ? "ink" : "gray"} radius="md">
                <item.icon size={18} />
              </ThemeIcon>
            }
            rightSection={<Text size="xs" c="dimmed">{String(index + 1).padStart(2, "0")}</Text>}
            className="mantine-home-navlink"
          />
        ))}
      </Stack>
      <Paper mt="auto" p="md" withBorder className="sidebar-summary">
        <Text className="eyebrow-text">Hôm nay</Text>
        <Title order={3}>5 ca học</Title>
        <Text c="dimmed" size="sm">
          Ca gần nhất bắt đầu lúc 18:00 với lớp Toán 9A.
        </Text>
      </Paper>
    </AppShell.Navbar>
  );
}

function StatCard({ stat }) {
  return (
    <Card withBorder className="mantine-stat-card">
      <Group justify="space-between" align="start">
        <div>
          <Text className="eyebrow-text">{stat.label}</Text>
          <Title order={2}>{stat.value}</Title>
          <Text c="dimmed" size="sm">
            {stat.detail}
          </Text>
        </div>
        <ThemeIcon variant="light" color="tuteGreen" radius="md" size={42}>
          <stat.icon size={22} />
        </ThemeIcon>
      </Group>
    </Card>
  );
}

function LessonCard() {
  return (
    <Card withBorder className="dashboard-card schedule-card-mantine">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="eyebrow-text">Lịch dạy</Text>
          <Title order={2}>Ca học hôm nay</Title>
        </div>
        <Button variant="outline" color="ink" radius="xl">
          Xem tuần
        </Button>
      </Group>
      <Stack gap="sm">
        {lessons.map((lesson) => (
          <Paper key={lesson.time} p="md" withBorder className={lesson.active ? "lesson-row-mantine active" : "lesson-row-mantine"}>
            <Group justify="space-between" gap="md">
              <Badge color={lesson.active ? "ink" : "gray"} variant={lesson.active ? "filled" : "light"} size="lg">
                {lesson.time}
              </Badge>
              <Box flex={1}>
                <Text fw={900}>{lesson.title}</Text>
                <Text size="sm" c={lesson.active ? "ink.6" : "dimmed"}>
                  {lesson.meta}
                </Text>
              </Box>
              <Button color={lesson.active ? "ink" : "gray"} variant={lesson.active ? "filled" : "outline"} radius="xl">
                {lesson.action}
              </Button>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function AttendanceCard() {
  return (
    <Card withBorder className="dashboard-card">
      <Group justify="space-between" align="start" mb="md">
        <div>
          <Text className="eyebrow-text">Điểm danh</Text>
          <Title order={2}>Toán 9A</Title>
        </div>
        <Badge color="tuteYellow" c="ink.9" size="xl" variant="filled">
          14/16
        </Badge>
      </Group>
      <Group justify="center">
        <RingProgress
          size={190}
          thickness={18}
          roundCaps
          sections={[{ value: 87, color: "tuteGreen.5" }]}
          label={<Text ta="center" fw={900} fz={36}>87%</Text>}
        />
      </Group>
      <Group justify="center" gap="xs">
        <Badge variant="light" color="tuteGreen">Có mặt 14</Badge>
        <Badge variant="light" color="orange">Muộn 1</Badge>
        <Badge variant="light" color="gray">Nghỉ 1</Badge>
      </Group>
    </Card>
  );
}

function ClassesCard() {
  const rows = [
    ["Toán 9A", "16 học sinh", "Thứ 2, 4, 6"],
    ["Hóa 10", "12 học sinh", "Thứ 3, 5"],
    ["Lý 11", "14 học sinh", "Cuối tuần"],
  ];

  return (
    <Card withBorder className="dashboard-card">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="eyebrow-text">Lớp học</Text>
          <Title order={2}>Lớp hoạt động</Title>
        </div>
        <ActionIcon variant="light" color="ink" radius="xl" size="lg" aria-label="Thêm lớp">
          <IconPlus size={20} />
        </ActionIcon>
      </Group>
      <Stack gap="sm">
        {rows.map(([name, count, schedule]) => (
          <Paper key={name} p="md" withBorder className="soft-row">
            <Group justify="space-between">
              <div>
                <Text fw={900}>{name}</Text>
                <Text c="dimmed" size="sm">{count}</Text>
              </div>
              <Badge variant="light" color="gray">{schedule}</Badge>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function TuitionCard() {
  return (
    <Card withBorder className="dashboard-card">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="eyebrow-text">Học phí</Text>
          <Title order={2}>Khoản cần nhắc</Title>
        </div>
        <Badge color="tuteYellow" c="ink.9" size="xl" variant="filled">
          24
        </Badge>
      </Group>
      <Stack gap="sm">
        {tuitionRows.map((row) => (
          <Paper key={row.name} p="md" withBorder className="soft-row tuition-row-mantine">
            <Group justify="space-between" align="start" gap="sm">
              <div>
                <Text fw={900}>{row.name}</Text>
                <Text size="sm" c="dimmed">{row.note}</Text>
              </div>
              <Text fw={900} c="orange.6" ta="right">
                {row.amount}
              </Text>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function AssignmentCard() {
  return (
    <Card withBorder className="dashboard-card assignment-card-mantine">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="eyebrow-text">Bài tập</Text>
          <Title order={2}>Cần chấm</Title>
        </div>
        <Button className="mantine-yellow-button" rightSection={<IconArrowUpRight size={16} />} radius="xl">
          Tạo bài
        </Button>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
        {[
          ["17", "Bài cần chấm"],
          ["6", "Nộp muộn"],
          ["3", "Cần nhận xét"],
        ].map(([value, label]) => (
          <Paper key={label} p="md" withBorder className="soft-row">
            <Title order={3}>{value}</Title>
            <Text c="dimmed" size="sm">{label}</Text>
          </Paper>
        ))}
      </SimpleGrid>
      <Box className="bar-visual" mt="md" aria-hidden="true">
        {[38, 58, 45, 72, 86].map((height) => (
          <span key={height} style={{ height: `${height}%` }} />
        ))}
      </Box>
    </Card>
  );
}

function StudentsCard() {
  return (
    <Card withBorder className="dashboard-card">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="eyebrow-text">Học sinh</Text>
          <Title order={2}>Cần chú ý</Title>
        </div>
        <Button variant="outline" color="ink" radius="xl">
          Xem tất cả
        </Button>
      </Group>
      <Stack gap="sm">
        {students.map((student) => (
          <Paper key={student.name} p="sm" withBorder className="soft-row">
            <Group>
              <Avatar color="ink" radius="md">{student.initials}</Avatar>
              <div>
                <Text fw={900}>{student.name}</Text>
                <Text size="sm" c="dimmed">{student.note}</Text>
              </div>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function Dashboard() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 76 }}
        navbar={{
          width: 260,
          breakpoint: "md",
          collapsed: { mobile: !opened },
        }}
        padding={0}
      >
        <Header opened={opened} toggle={toggle} />
        <Navbar />
        <AppShell.Main className="mantine-home-main">
          <ScrollArea h="100%">
            <Box className="page-intro">
              <Group justify="space-between" align="flex-end" gap="xl">
                <div>
                  <Text className="eyebrow-text">Teacher home</Text>
                  <Title className="home-display-title">Xin chào, cô Lan.</Title>
                  <Text c="dimmed" maw={720}>
                    Dashboard hôm nay đã gom lịch dạy, điểm danh, học phí và bài tập cần xử lý.
                  </Text>
                </div>
                <Group gap="sm">
                  <Button color="ink" radius="xl" rightSection={<IconArrowUpRight size={16} />}>
                    Điểm danh nhanh
                  </Button>
                  <Button component="a" href="index.html" color="ink" variant="outline" radius="xl">
                    Về landing
                  </Button>
                </Group>
              </Group>
            </Box>

            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md" className="stats-grid-mantine">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" className="dashboard-grid-mantine">
              <Stack gap="md">
                <LessonCard />
                <ClassesCard />
                <AssignmentCard />
              </Stack>
              <Stack gap="md">
                <AttendanceCard />
                <TuitionCard />
                <StudentsCard />
              </Stack>
            </SimpleGrid>

            <Divider my="xl" variant="dotted" />
            <Text c="dimmed" size="sm" ta="center" pb="xl">
              TuteClass Mantine dashboard - thiết kế cho giáo viên dạy thêm cá nhân.
            </Text>
          </ScrollArea>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
