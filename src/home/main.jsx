import "@mantine/core/styles.css";
import "./home.css";
import tuteLogoUrl from "../../assets/tute-logo.png";

import {
  ActionIcon,
  AppShell,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Group,
  MantineProvider,
  NavLink,
  Paper,
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
import {
  IconArrowUpRight,
  IconBook2,
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
  IconClipboardCheck,
  IconCoin,
  IconHome2,
  IconPlus,
  IconSearch,
  IconUsers,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const fontStack = '"Be Vietnam Pro", Inter, Arial, sans-serif';

const theme = createTheme({
  fontFamily: fontStack,
  headings: {
    fontFamily: fontStack,
    fontWeight: "800",
  },
  colors: {
    tuteBlue: [
      "#e8f2fb",
      "#cfe2f3",
      "#9cc4e4",
      "#66a3d2",
      "#3f88c5",
      "#0d4c7e",
      "#0a416d",
      "#083558",
      "#062845",
      "#041d32",
    ],
    tuteOrange: [
      "#fff1e7",
      "#ffd9bf",
      "#ffb782",
      "#ff9445",
      "#f47b20",
      "#d86112",
      "#ad4b0e",
      "#84380b",
      "#622908",
      "#431b04",
    ],
    ink: [
      "#f7f7f4",
      "#e7e7e2",
      "#c9c9c0",
      "#aaa99f",
      "#88867a",
      "#646257",
      "#4d4b42",
      "#36352f",
      "#23231f",
      "#151511",
    ],
  },
  primaryColor: "tuteBlue",
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

const summaryCards = [
  { label: "Ca dạy hôm nay", value: "3", detail: "Ca gần nhất lúc 18:00", icon: IconCalendar },
  { label: "Cần điểm danh", value: "1", detail: "Toán 9A đang chờ", icon: IconClipboardCheck },
  { label: "Học phí cần nhắc", value: "24", detail: "3 khoản quá hạn", icon: IconCoin },
  { label: "Bài cần chấm", value: "17", detail: "Ưu tiên Toán 9A", icon: IconBook2 },
];

const lessons = [
  {
    time: "18:00",
    title: "Toán 9A",
    topic: "Ôn hệ phương trình",
    meta: "16 học sinh - Phòng Zoom A",
    status: "Sắp bắt đầu",
    action: "Điểm danh",
    active: true,
  },
  {
    time: "19:30",
    title: "Hóa 10",
    topic: "Cân bằng phản ứng",
    meta: "12 học sinh - Tài liệu đã gửi",
    status: "Đã chuẩn bị",
    action: "Giao bài",
  },
  {
    time: "20:45",
    title: "Lý 11",
    topic: "Điện trường",
    meta: "14 học sinh - 2 bạn xin nghỉ",
    status: "Cần xem lại",
    action: "Xem lớp",
  },
];

const focusTasks = [
  {
    title: "Nhắc học phí",
    detail: "Gửi tin nhắn cho 3 phụ huynh trước 20:00.",
    badge: "Ưu tiên",
    color: "tuteOrange",
  },
  {
    title: "Chấm bài Toán 9A",
    detail: "17 bài đang chờ nhận xét trước ca học.",
    badge: "17 bài",
    color: "tuteOrange",
  },
  {
    title: "Theo dõi chuyên cần",
    detail: "Mai Anh vắng 2 buổi liên tiếp, nên gọi phụ huynh.",
    badge: "Cần gọi",
    color: "red",
  },
  {
    title: "Tài liệu buổi học",
    detail: "Slide Hóa 10 đã sẵn sàng, còn thiếu file bài tập.",
    badge: "Thiếu file",
    color: "gray",
  },
];

const tuitionRows = [
  { name: "Mai Anh", amount: "1.200.000đ", note: "Quá hạn 3 ngày", status: "Cần nhắc" },
  { name: "Quốc Huy", amount: "900.000đ", note: "Đến hạn hôm nay", status: "Hôm nay" },
  { name: "Bảo Trâm", amount: "1.500.000đ", note: "Nhắc phụ huynh", status: "Theo dõi" },
];

const classRows = [
  { name: "Toán 9A", count: "16 học sinh", schedule: "Thứ 2, 4, 6", progress: "Đang ôn thi" },
  { name: "Hóa 10", count: "12 học sinh", schedule: "Thứ 3, 5", progress: "Tuần 8/12" },
  { name: "Lý 11", count: "14 học sinh", schedule: "Cuối tuần", progress: "Cần bổ sung bài" },
];

const students = [
  { initials: "MA", name: "Mai Anh", note: "Vắng 2 buổi liên tiếp", tag: "Chuyên cần" },
  { initials: "QH", name: "Quốc Huy", note: "Chưa nộp bài tuần này", tag: "Bài tập" },
  { initials: "BT", name: "Bảo Trâm", note: "Cần nhắc học phí", tag: "Học phí" },
];

function Header() {
  return (
    <AppShell.Header className="mantine-home-header">
      <Group h="100%" px="xl" gap="lg" wrap="nowrap">
        <a className="mantine-home-logo" href="index.html" aria-label="TuteClass landing">
          <img src={tuteLogoUrl} alt="TuteClass" />
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
          <Button className="primary-action" rightSection={<IconPlus size={16} />} radius="xl">
            Tạo lớp
          </Button>
          <Group className="teacher-pill" gap="xs" wrap="nowrap">
            <Avatar color="tuteBlue" radius="xl" size={34}>
              TL
            </Avatar>
            <Text fw={700} visibleFrom="xs">
              Cô Lan
            </Text>
          </Group>
        </Group>
      </Group>
    </AppShell.Header>
  );
}

function Navbar({ isCollapsed, onToggle }) {
  return (
    <AppShell.Navbar p="xs" className={isCollapsed ? "mantine-home-navbar is-collapsed" : "mantine-home-navbar"}>
      <Group justify={isCollapsed ? "center" : "flex-end"} className="nav-toggle-row">
        <ActionIcon
          variant="subtle"
          color="ink"
          radius="md"
          aria-label={isCollapsed ? "Mở rộng thanh điều hướng" : "Thu gọn thanh điều hướng"}
          title={isCollapsed ? "Mở rộng" : "Thu gọn"}
          onClick={onToggle}
        >
          {isCollapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
        </ActionIcon>
      </Group>
      <Stack gap={6} className="nav-stack">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            active={item.active}
            label={item.label}
            aria-label={item.label}
            title={item.label}
            leftSection={
              <ThemeIcon variant={item.active ? "filled" : "light"} color={item.active ? "tuteBlue" : "gray"} radius="md">
                <item.icon size={18} />
              </ThemeIcon>
            }
            className="mantine-home-navlink"
          />
        ))}
      </Stack>
      <Paper mt="auto" p="sm" withBorder className="sidebar-summary">
        <Text className="section-kicker">Hôm nay</Text>
        <Title order={4}>3 ca dạy</Title>
        <Text c="dimmed" size="sm">
          Ca gần nhất bắt đầu lúc 18:00 với lớp Toán 9A.
        </Text>
      </Paper>
    </AppShell.Navbar>
  );
}

function SectionTitle({ kicker, title, action }) {
  return (
    <Group justify="space-between" align="end" gap="lg" mb="sm">
      <div>
        <Text className="section-kicker">{kicker}</Text>
        <Title order={2} className="section-title">
          {title}
        </Title>
      </div>
      {action}
    </Group>
  );
}

function SummaryCard({ item }) {
  return (
    <Card withBorder className="summary-card">
      <Group justify="space-between" align="start" wrap="nowrap">
        <div>
          <Text className="metric-label">{item.label}</Text>
          <Title order={3}>{item.value}</Title>
          <Text c="dimmed" size="sm">
            {item.detail}
          </Text>
        </div>
        <ThemeIcon variant="light" color="tuteBlue" radius="md" size={40}>
          <item.icon size={21} />
        </ThemeIcon>
      </Group>
    </Card>
  );
}

function NextLessonCard() {
  const lesson = lessons[0];

  return (
    <Card withBorder className="next-lesson-card">
      <Group justify="space-between" align="start" mb="lg">
        <div>
          <Text className="section-kicker">Ca sắp tới</Text>
          <Title order={2}>{lesson.title}</Title>
          <Text c="dimmed">{lesson.topic}</Text>
        </div>
        <Badge color="tuteBlue" variant="light" size="lg">
          {lesson.status}
        </Badge>
      </Group>

      <Group align="end" justify="space-between" gap="xl" className="lesson-focus-row">
        <div>
          <Text className="time-label">{lesson.time}</Text>
          <Text c="dimmed" size="sm">
            {lesson.meta}
          </Text>
        </div>
        <Group gap="sm">
          <Button color="tuteBlue" radius="xl" rightSection={<IconArrowUpRight size={16} />}>
            {lesson.action}
          </Button>
          <Button variant="outline" color="ink" radius="xl">
            Mở lớp
          </Button>
        </Group>
      </Group>

      <Divider my="lg" />

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="sm">
        <Paper p="sm" withBorder className="quiet-cell">
          <Text fw={700}>Tài liệu</Text>
          <Text size="sm" c="dimmed">
            Đã gửi 2 file
          </Text>
        </Paper>
        <Paper p="sm" withBorder className="quiet-cell">
          <Text fw={700}>Điểm danh</Text>
          <Text size="sm" c="dimmed">
            Chưa mở
          </Text>
        </Paper>
        <Paper p="sm" withBorder className="quiet-cell">
          <Text fw={700}>Bài tập</Text>
          <Text size="sm" c="dimmed">
            17 bài cần chấm
          </Text>
        </Paper>
      </SimpleGrid>
    </Card>
  );
}

function FocusTasksCard() {
  return (
    <Card withBorder className="dashboard-card">
      <SectionTitle
        kicker="Cần xử lý"
        title="Việc quan trọng"
        action={
          <Button variant="subtle" color="tuteBlue" radius="xl" rightSection={<IconArrowUpRight size={15} />}>
            Xem tất cả
          </Button>
        }
      />
      <Stack gap="sm">
        {focusTasks.map((task) => (
          <Paper key={task.title} p="sm" withBorder className="task-row">
            <Group justify="space-between" align="start" gap="sm" wrap="nowrap">
              <div>
                <Text fw={700}>{task.title}</Text>
                <Text size="sm" c="dimmed">
                  {task.detail}
                </Text>
              </div>
              <Badge color={task.color} variant="light">
                {task.badge}
              </Badge>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function LessonListCard() {
  return (
    <Card withBorder className="dashboard-card">
      <SectionTitle
        kicker="Lịch dạy"
        title="Hôm nay"
        action={
          <Button variant="outline" color="ink" radius="xl">
            Xem tuần
          </Button>
        }
      />
      <Stack gap="sm">
        {lessons.map((lesson) => (
          <Paper key={lesson.time} p="md" withBorder className={lesson.active ? "lesson-row active" : "lesson-row"}>
            <Group justify="space-between" gap="md" wrap="nowrap">
              <div className="lesson-time">{lesson.time}</div>
              <Box flex={1}>
                <Group gap="xs" mb={2}>
                  <Text fw={800}>{lesson.title}</Text>
                  <Badge variant="light" color={lesson.active ? "tuteBlue" : "gray"}>
                    {lesson.status}
                  </Badge>
                </Group>
                <Text size="sm" c="dimmed">
                  {lesson.topic} - {lesson.meta}
                </Text>
              </Box>
              <Button color={lesson.active ? "tuteBlue" : "gray"} variant={lesson.active ? "filled" : "light"} radius="xl">
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
    <Card withBorder className="dashboard-card compact-card">
      <SectionTitle kicker="Điểm danh" title="Toán 9A" />
      <Group justify="space-between" align="center" gap="lg">
        <RingProgress
          size={132}
          thickness={12}
          roundCaps
          sections={[{ value: 87, color: "tuteBlue.5" }]}
          label={
            <Text ta="center" fw={800} fz={24}>
              87%
            </Text>
          }
        />
        <Stack gap={8} flex={1}>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Có mặt
            </Text>
            <Text fw={700}>14</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Muộn
            </Text>
            <Text fw={700}>1</Text>
          </Group>
          <Group justify="space-between">
            <Text size="sm" c="dimmed">
              Nghỉ
            </Text>
            <Text fw={700}>1</Text>
          </Group>
        </Stack>
      </Group>
    </Card>
  );
}

function TuitionCard() {
  return (
    <Card withBorder className="dashboard-card">
      <SectionTitle
        kicker="Học phí"
        title="Khoản cần nhắc"
        action={
          <Button variant="outline" color="ink" radius="xl">
            Gửi nhắc
          </Button>
        }
      />
      <Stack gap="sm">
        {tuitionRows.map((row) => (
          <Paper key={row.name} p="sm" withBorder className="data-row">
            <Group justify="space-between" align="start" gap="sm" wrap="nowrap">
              <div>
                <Text fw={700}>{row.name}</Text>
                <Text size="sm" c="dimmed">
                  {row.note}
                </Text>
              </div>
              <div className="right-data">
                <Text fw={800}>{row.amount}</Text>
                <Badge color="tuteOrange" variant="light">
                  {row.status}
                </Badge>
              </div>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function ClassesCard() {
  return (
    <Card withBorder className="dashboard-card">
      <SectionTitle kicker="Lớp học" title="Đang quản lý" />
      <Stack gap="sm">
        {classRows.map((row) => (
          <Paper key={row.name} p="sm" withBorder className="data-row">
            <Group justify="space-between" align="center" gap="sm">
              <div>
                <Text fw={800}>{row.name}</Text>
                <Text size="sm" c="dimmed">
                  {row.count} - {row.schedule}
                </Text>
              </div>
              <Badge color="gray" variant="light">
                {row.progress}
              </Badge>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function StudentsCard() {
  return (
    <Card withBorder className="dashboard-card">
      <SectionTitle
        kicker="Học sinh"
        title="Cần chú ý"
        action={
          <Button variant="outline" color="ink" radius="xl">
            Xem tất cả
          </Button>
        }
      />
      <Stack gap="sm">
        {students.map((student) => (
          <Paper key={student.name} p="sm" withBorder className="data-row">
            <Group justify="space-between" gap="sm" wrap="nowrap">
              <Group gap="sm" wrap="nowrap">
                <Avatar color="ink" radius="md">
                  {student.initials}
                </Avatar>
                <div>
                  <Text fw={700}>{student.name}</Text>
                  <Text size="sm" c="dimmed">
                    {student.note}
                  </Text>
                </div>
              </Group>
              <Badge color="gray" variant="light">
                {student.tag}
              </Badge>
            </Group>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 76 }}
        navbar={{
          width: isSidebarCollapsed ? 76 : 208,
          breakpoint: "md",
          collapsed: { mobile: false },
        }}
        padding={0}
      >
        <Header />
        <Navbar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed((value) => !value)} />
        <AppShell.Main className="mantine-home-main">
          <ScrollArea h="100%">
            <Box className="home-container">
              <Group justify="space-between" align="center" gap="lg" className="page-heading">
                <div>
                  <Text className="section-kicker">Thứ bảy, 20/06</Text>
                  <Title order={1}>Bảng điều khiển hôm nay</Title>
                  <Text c="dimmed" className="page-heading-description">
                    Chào cô Lan, các việc cần làm nhất đã được đưa lên đầu để cô theo dõi nhanh trước giờ dạy.
                  </Text>
                </div>
                <Group gap="sm">
                  <Button color="tuteBlue" radius="xl" rightSection={<IconArrowUpRight size={16} />}>
                    Điểm danh nhanh
                  </Button>
                  <Button component="a" href="index.html" color="ink" variant="outline" radius="xl">
                    Về landing
                  </Button>
                </Group>
              </Group>

              <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }} spacing="sm" mb="md">
                {summaryCards.map((item) => (
                  <SummaryCard key={item.label} item={item} />
                ))}
              </SimpleGrid>

              <div className="priority-grid">
                <NextLessonCard />
                <FocusTasksCard />
              </div>

              <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md" mt="md">
                <Stack gap="md">
                  <LessonListCard />
                  <ClassesCard />
                </Stack>
                <Stack gap="md">
                  <AttendanceCard />
                  <TuitionCard />
                  <StudentsCard />
                </Stack>
              </SimpleGrid>

              <Divider my="xl" variant="dotted" />
              <Text c="dimmed" size="sm" ta="center" pb="xl">
                TuteClass Mantine dashboard - tập trung vào lịch dạy, học phí, điểm danh và học sinh cần theo dõi.
              </Text>
            </Box>
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
