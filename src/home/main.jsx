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
  Checkbox,
  Drawer,
  Group,
  MantineProvider,
  NavLink,
  Paper,
  RingProgress,
  ScrollArea,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
  createTheme,
} from "@mantine/core";
import {
  IconBook2,
  IconCalendar,
  IconChartLine,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconClipboardCheck,
  IconCoin,
  IconHome2,
  IconNotes,
  IconPlus,
  IconReceipt,
  IconSearch,
  IconStar,
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
  defaultRadius: 10,
});

const navItems = [
  { icon: IconHome2, label: "Tổng quan", active: true },
  { icon: IconCalendar, label: "Lịch dạy" },
  { icon: IconBook2, label: "Lớp học" },
  { icon: IconUsers, label: "Học sinh" },
  { icon: IconCoin, label: "Học phí" },
  { icon: IconClipboardCheck, label: "Bài tập" },
];

const classOptions = [
  {
    id: "math-9a",
    name: "Toán 9A",
    teacher: "Cô Lan",
    subject: "Đại số · Chương 4",
    room: "Phòng online 2",
    students: 30,
    noteTone: "paper-yellow",
    metrics: {
      average: "8.2",
      averageBadge: "+0.3",
      averageDetail: "Cập nhật 12/05",
      paid: "28",
      paidSuffix: "/30 học sinh",
      paidBadge: "93%",
      paidDetail: "Còn 2 bạn chưa nộp",
      tasks: "6",
      tasksBadge: "Gấp",
      next: "Thứ 5, 14:00",
      nextDetail: "Còn 2 ngày nữa",
      progress: "18",
      progressSuffix: "/20 buổi",
      progressBadge: "90%",
      progressDetail: "Còn 2 buổi cuối kỳ",
    },
    schedule: [
      { day: "15", weekday: "TH 5", title: "Toán 9A · Chương 4", meta: "14:00 - 15:30 · Phòng online 2" },
      { day: "16", weekday: "TH 6", title: "Họp phụ huynh", meta: "19:00 - 20:00 · Trực tuyến" },
      { day: "18", weekday: "CN", title: "Toán 9A · Ôn giữa kỳ", meta: "09:00 - 11:00 · Phòng online 2" },
    ],
    health: [
      { label: "Vững kiến thức", value: "20 học sinh (66.7%)", color: "#2fa36f", ratio: 66.7 },
      { label: "Cần hỗ trợ", value: "7 học sinh (23.3%)", color: "#df8b24", ratio: 23.3 },
      { label: "Nguy cơ", value: "3 học sinh (10%)", color: "#d95b70", ratio: 10 },
    ],
    stats: [
      { value: "96%", label: "Tỷ lệ nộp bài đúng hạn" },
      { value: "90%", label: "Đi học đầy đủ tuần này" },
    ],
    todos: [
      { text: "Chấm bài kiểm tra chương 3", done: true },
      { text: "Nhắc học sinh nộp bài tập tuần 18", done: true },
      { text: "Soạn bài luyện tập Đại số", done: true },
      { text: "Gửi thông báo khóa ôn cho phụ huynh", tag: "Hôm nay", tone: "rose" },
      { text: "Chuẩn bị slide bài mới", tag: "Thứ 5", tone: "orange" },
    ],
  },
  {
    id: "web-k12",
    name: "Web Foundation K12",
    teacher: "Cô Lan",
    subject: "HTML/CSS · Layout cơ bản",
    room: "Lab online",
    students: 24,
    noteTone: "paper-blue",
    metrics: {
      average: "8.6",
      averageBadge: "+0.5",
      averageDetail: "Cập nhật 18/05",
      paid: "22",
      paidSuffix: "/24 học sinh",
      paidBadge: "92%",
      paidDetail: "Còn 2 bạn chưa nộp",
      tasks: "4",
      tasksBadge: "Mới",
      next: "Thứ 6, 19:00",
      nextDetail: "Còn 3 ngày nữa",
      progress: "12",
      progressSuffix: "/16 buổi",
      progressBadge: "75%",
      progressDetail: "Còn 4 buổi dự án",
    },
    schedule: [
      { day: "16", weekday: "TH 6", title: "Web K12 · Flexbox", meta: "19:00 - 20:30 · Lab online" },
      { day: "19", weekday: "TH 2", title: "Review landing page", meta: "19:00 - 20:30 · Trực tuyến" },
      { day: "21", weekday: "TH 4", title: "Mini project", meta: "19:00 - 21:00 · Lab online" },
    ],
    health: [
      { label: "Theo kịp bài", value: "17 học sinh (70.8%)", color: "#2fa36f", ratio: 70.8 },
      { label: "Cần sửa bài", value: "5 học sinh (20.9%)", color: "#df8b24", ratio: 20.9 },
      { label: "Chưa nộp project", value: "2 học sinh (8.3%)", color: "#d95b70", ratio: 8.3 },
    ],
    stats: [
      { value: "88%", label: "Bài tập nộp đúng hạn" },
      { value: "92%", label: "Tham gia buổi học tuần này" },
    ],
    todos: [
      { text: "Duyệt landing page của nhóm 2", done: true },
      { text: "Gửi tài liệu CSS Grid", done: true },
      { text: "Tổng hợp lỗi layout thường gặp", tag: "Hôm nay", tone: "rose" },
      { text: "Chuẩn bị demo responsive", tag: "Thứ 6", tone: "orange" },
    ],
  },
  {
    id: "physics-9a",
    name: "Vật lý 9A",
    teacher: "Thầy Minh",
    subject: "Điện học · Ôn tập",
    room: "Phòng A2",
    students: 28,
    noteTone: "paper-pink",
    metrics: {
      average: "7.8",
      averageBadge: "+0.1",
      averageDetail: "Cập nhật 10/05",
      paid: "25",
      paidSuffix: "/28 học sinh",
      paidBadge: "89%",
      paidDetail: "Còn 3 bạn chưa nộp",
      tasks: "8",
      tasksBadge: "Gấp",
      next: "Thứ 7, 09:00",
      nextDetail: "Còn 4 ngày nữa",
      progress: "15",
      progressSuffix: "/20 buổi",
      progressBadge: "75%",
      progressDetail: "Cần bù 1 buổi thí nghiệm",
    },
    schedule: [
      { day: "17", weekday: "TH 7", title: "Vật lý 9A · Điện trở", meta: "09:00 - 10:30 · Phòng A2" },
      { day: "19", weekday: "TH 2", title: "Chữa đề số 2", meta: "18:00 - 19:30 · Phòng A2" },
      { day: "22", weekday: "TH 5", title: "Thực hành đo mạch", meta: "18:00 - 20:00 · Phòng lab" },
    ],
    health: [
      { label: "Nắm chắc kiến thức", value: "16 học sinh (57.1%)", color: "#2fa36f", ratio: 57.1 },
      { label: "Cần luyện thêm", value: "9 học sinh (32.2%)", color: "#df8b24", ratio: 32.2 },
      { label: "Nguy cơ hổng bài", value: "3 học sinh (10.7%)", color: "#d95b70", ratio: 10.7 },
    ],
    stats: [
      { value: "82%", label: "Bài tập nộp đúng hạn" },
      { value: "86%", label: "Đi học đầy đủ tuần này" },
    ],
    todos: [
      { text: "Chấm bài điện trở tương đương", done: true },
      { text: "Nhắc nhóm 3 hoàn thành báo cáo", tag: "Hôm nay", tone: "rose" },
      { text: "Chuẩn bị bộ câu hỏi ôn tập", tag: "Thứ 7", tone: "orange" },
    ],
  },
  {
    id: "literature-9a",
    name: "Ngữ văn 9A",
    teacher: "Cô Hoa",
    subject: "Nghị luận xã hội",
    room: "Trực tuyến",
    students: 26,
    noteTone: "paper-violet",
    metrics: {
      average: "8.0",
      averageBadge: "+0.2",
      averageDetail: "Cập nhật 14/05",
      paid: "24",
      paidSuffix: "/26 học sinh",
      paidBadge: "92%",
      paidDetail: "Còn 2 bạn chưa nộp",
      tasks: "5",
      tasksBadge: "Mới",
      next: "CN, 08:00",
      nextDetail: "Cuối tuần này",
      progress: "14",
      progressSuffix: "/18 buổi",
      progressBadge: "78%",
      progressDetail: "Còn 4 buổi luyện đề",
    },
    schedule: [
      { day: "18", weekday: "CN", title: "Ngữ văn 9A · Dàn ý nghị luận", meta: "08:00 - 09:30 · Trực tuyến" },
      { day: "20", weekday: "TH 3", title: "Chữa bài viết số 3", meta: "19:00 - 20:30 · Trực tuyến" },
      { day: "23", weekday: "TH 6", title: "Luyện đề đọc hiểu", meta: "19:00 - 21:00 · Trực tuyến" },
    ],
    health: [
      { label: "Viết ổn định", value: "18 học sinh (69.2%)", color: "#2fa36f", ratio: 69.2 },
      { label: "Cần sửa lập luận", value: "6 học sinh (23.1%)", color: "#df8b24", ratio: 23.1 },
      { label: "Thiếu bài viết", value: "2 học sinh (7.7%)", color: "#d95b70", ratio: 7.7 },
    ],
    stats: [
      { value: "91%", label: "Bài viết nộp đúng hạn" },
      { value: "88%", label: "Tham gia thảo luận" },
    ],
    todos: [
      { text: "Nhận xét bài nghị luận xã hội", done: true },
      { text: "Gửi tài liệu mẫu mở bài", done: true },
      { text: "Chọn đề luyện viết tuần sau", tag: "Hôm nay", tone: "rose" },
    ],
  },
];

function buildMetricCards(classroom) {
  return [
    {
      icon: IconStar,
      tone: "green",
      label: "Điểm trung bình lớp",
      value: classroom.metrics.average,
      detail: classroom.metrics.averageDetail,
      badge: classroom.metrics.averageBadge,
    },
    {
      icon: IconReceipt,
      tone: "orange",
      label: "Học phí đã nộp",
      value: classroom.metrics.paid,
      suffix: classroom.metrics.paidSuffix,
      detail: classroom.metrics.paidDetail,
      badge: classroom.metrics.paidBadge,
    },
    {
      icon: IconClipboardCheck,
      tone: "rose",
      label: "Bài cần chấm",
      value: classroom.metrics.tasks,
      suffix: "bài",
      detail: "Trước buổi học tới",
      badge: classroom.metrics.tasksBadge,
    },
    {
      icon: IconCalendar,
      tone: "blue",
      label: "Lịch dạy tiếp theo",
      value: classroom.metrics.next,
      detail: classroom.metrics.nextDetail,
      badge: "Sắp tới",
    },
    {
      icon: IconChartLine,
      tone: "violet",
      label: "Tiến độ dạy",
      value: classroom.metrics.progress,
      suffix: classroom.metrics.progressSuffix,
      detail: classroom.metrics.progressDetail,
      badge: classroom.metrics.progressBadge,
    },
  ];
}

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

function Navbar({ isCollapsed, onToggle, classroom }) {
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
          Ca gần nhất bắt đầu lúc {classroom.metrics.next.split(", ").pop()} với lớp {classroom.name}.
        </Text>
      </Paper>
    </AppShell.Navbar>
  );
}

function ClassOverviewBar({ classroom, onOpen }) {
  return (
    <div className="class-overview-bar">
      <button type="button" className="class-title-switch" onClick={onOpen} aria-label="Đổi lớp đang xem">
        <div>
          <Text className="class-breadcrumb">Tổng quan lớp</Text>
          <Title order={1}>
            {classroom.name}
            <span>{classroom.subject}</span>
          </Title>
          <Text className="class-subline">
            {classroom.students} học sinh · {classroom.room} · {classroom.teacher}
          </Text>
        </div>
        <span className="class-switch-chevron">
          <IconChevronDown size={18} />
        </span>
      </button>

      <Group className="class-quick-meta" gap="xs" wrap="nowrap">
        <Badge variant="light" color="tuteBlue" radius="md">
          Lớp đang xem
        </Badge>
        <Text fw={800}>{classroom.metrics.next}</Text>
      </Group>
    </div>
  );
}

function ClassDrawer({ opened, onClose, classes, selectedId, onSelect }) {
  return (
    <Drawer
      opened={opened}
      onClose={onClose}
      title="Lớp của tôi"
      padding="lg"
      size={320}
      radius="md"
      classNames={{
        content: "class-drawer-content",
        header: "class-drawer-header",
        title: "class-drawer-title",
      }}
    >
      <Stack gap="lg" className="class-note-stack">
        {classes.map((item) => (
          <button
            type="button"
            key={item.id}
            className={`class-note ${item.noteTone}${item.id === selectedId ? " active" : ""}`}
            onClick={() => {
              onSelect(item.id);
              onClose();
            }}
          >
            <span className="class-note-title">{item.name}</span>
            <span className="class-note-subject">{item.subject}</span>
            <span className="class-note-meta">{item.students} học sinh · {item.teacher}</span>
          </button>
        ))}
        <button type="button" className="class-note add-note">
          <IconPlus size={18} />
          Thêm lớp
        </button>
      </Stack>
    </Drawer>
  );
}

function MetricCard({ item }) {
  return (
    <Card withBorder className={`metric-card tone-${item.tone}`}>
      <Group justify="space-between" align="start" mb="md" wrap="nowrap">
        <ThemeIcon className="metric-icon" variant="light" radius="md" size={44}>
          <item.icon size={23} stroke={1.8} />
        </ThemeIcon>
        <Badge className="metric-badge" variant="light">
          {item.badge}
        </Badge>
      </Group>
      <Text className="metric-label">{item.label}</Text>
      <Group gap={5} align="baseline" wrap="nowrap">
        <Title order={2} className="metric-value">
          {item.value}
        </Title>
        {item.suffix ? <Text className="metric-suffix">{item.suffix}</Text> : null}
      </Group>
      <Text className="metric-detail">{item.detail}</Text>
    </Card>
  );
}

function PanelHeader({ icon: Icon, title, action, tone = "blue" }) {
  return (
    <Group justify="space-between" align="center" mb="md" wrap="nowrap">
      <Group gap="sm" wrap="nowrap">
        <ThemeIcon className={`panel-icon tone-${tone}`} variant="light" radius="md" size={40}>
          <Icon size={20} />
        </ThemeIcon>
        <Title order={2} className="panel-title">
          {title}
        </Title>
      </Group>
      {action ? <Text className="panel-action">{action}</Text> : null}
    </Group>
  );
}

function SchedulePanel({ items }) {
  return (
    <Card withBorder className="dashboard-panel schedule-panel">
      <PanelHeader icon={IconCalendar} title="Lịch sắp tới" action="Cả tuần" tone="violet" />
      <Stack gap="md">
        {items.map((item) => (
          <Paper key={`${item.day}-${item.title}`} withBorder className="schedule-row">
            <div className="schedule-date">
              <b>{item.day}</b>
              <span>{item.weekday}</span>
            </div>
            <div>
              <Text fw={800}>{item.title}</Text>
              <Text c="dimmed" size="sm">
                {item.meta}
              </Text>
            </div>
          </Paper>
        ))}
      </Stack>
    </Card>
  );
}

function ClassStatusPanel({ classroom }) {
  return (
    <Card withBorder className="dashboard-panel status-panel">
      <PanelHeader icon={IconUsers} title="Tình trạng lớp học" action="Xem chi tiết" tone="blue" />
      <div className="status-content">
        <RingProgress
          size={136}
          thickness={18}
          roundCaps
          sections={classroom.health.map((item) => ({ value: item.ratio, color: item.color }))}
          label={
            <Stack align="center" gap={0}>
              <Text fw={900} fz={28} lh={1}>
                {classroom.students}
              </Text>
              <Text c="dimmed" size="sm">
                học sinh
              </Text>
            </Stack>
          }
        />
        <Stack gap="md" className="health-list">
          {classroom.health.map((item) => (
            <Group key={item.label} gap="sm" align="start" wrap="nowrap">
              <span className="health-dot" style={{ background: item.color }} />
              <div>
                <Text fw={800}>{item.label}</Text>
                <Text c="dimmed" size="sm">
                  {item.value}
                </Text>
              </div>
            </Group>
          ))}
        </Stack>
      </div>
      <div className="status-stat-grid">
        {classroom.stats.map((item) => (
          <Paper key={item.label} withBorder className="status-stat">
            <Text className="status-stat-value">{item.value}</Text>
            <Text c="dimmed" size="sm">
              {item.label}
            </Text>
          </Paper>
        ))}
      </div>
    </Card>
  );
}

function TodoPanel({ items }) {
  return (
    <Card withBorder className="dashboard-panel todo-panel">
      <Group justify="space-between" align="center" mb="md" wrap="nowrap">
        <Group className="todo-tabs" gap={4} wrap="nowrap">
          <button type="button" className="todo-tab active">
            <IconClipboardCheck size={16} />
            Việc cần làm
          </button>
          <button type="button" className="todo-tab">
            <IconNotes size={16} />
            Ghi chú
          </button>
        </Group>
        <Text c="dimmed" fw={700}>
          3/5
        </Text>
      </Group>
      <Stack gap={0}>
        {items.map((item) => (
          <div key={item.text} className={item.done ? "todo-row done" : "todo-row"}>
            <Checkbox checked={Boolean(item.done)} readOnly radius="md" color="teal" />
            <Text className="todo-text">{item.text}</Text>
            {item.tag ? (
              <Badge className={`todo-badge tone-${item.tone}`} variant="light">
                {item.tag}
              </Badge>
            ) : null}
          </div>
        ))}
      </Stack>
    </Card>
  );
}

function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  const [selectedClassId, setSelectedClassId] = useState(classOptions[0].id);
  const [isClassDrawerOpen, setIsClassDrawerOpen] = useState(false);
  const selectedClass = classOptions.find((item) => item.id === selectedClassId) ?? classOptions[0];
  const metricCards = buildMetricCards(selectedClass);

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 64 }}
        navbar={{
          width: isSidebarCollapsed ? 76 : 208,
          breakpoint: "md",
          collapsed: { mobile: false },
        }}
        padding={0}
      >
        <Header />
        <Navbar
          classroom={selectedClass}
          isCollapsed={isSidebarCollapsed}
          onToggle={() => setIsSidebarCollapsed((value) => !value)}
        />
        <AppShell.Main className="mantine-home-main">
          <ScrollArea h="100%">
            <Box className="home-container">
              <ClassOverviewBar classroom={selectedClass} onOpen={() => setIsClassDrawerOpen(true)} />

              <div className="metric-grid">
                {metricCards.map((item) => (
                  <MetricCard key={item.label} item={item} />
                ))}
              </div>

              <div className="home-dashboard-grid">
                <SchedulePanel items={selectedClass.schedule} />
                <ClassStatusPanel classroom={selectedClass} />
                <TodoPanel items={selectedClass.todos} />
              </div>
            </Box>
          </ScrollArea>
        </AppShell.Main>
        <ClassDrawer
          opened={isClassDrawerOpen}
          onClose={() => setIsClassDrawerOpen(false)}
          classes={classOptions}
          selectedId={selectedClassId}
          onSelect={setSelectedClassId}
        />
      </AppShell>
    </MantineProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);
